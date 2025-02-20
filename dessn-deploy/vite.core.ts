import { createServer } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import DynamicPublicDirectory from "vite-multiple-assets";
import path, { resolve } from "path";
import { NgmiPolyfill } from "vite-plugin-ngmi-polyfill";
export interface ViteWorkerConfig {
  vitePort: number;
  tempDir: string;
  basePath?: string;
  codebasePath: string;
}

export const DEFAULT_CONFIG: ViteWorkerConfig = {
  vitePort: 5173,
  tempDir: ".temp",
  codebasePath: process.cwd(),
};

// Next.js stubs plugin
const nextJsStubsPlugin = (tempDirFullPath: string) => ({
  name: "nextjs-stubs",
  resolveId(id: string) {
    if (id === "next/image")
      return path.join(tempDirFullPath, "next/image.tsx");
    if (id === "next/link") return path.join(tempDirFullPath, "next/link.tsx");
    if (id === "next/router")
      return path.join(tempDirFullPath, "next/router.tsx");
    if (id === "next/navigation")
      return path.join(tempDirFullPath, "next/navigation.tsx");
  },
  async transform(code: string) {
    return code;
  },
});
export type ViteServerResult =
  | { type: "started"; port: number }
  | { type: "error"; error: string };

export async function startViteServer(
  config: ViteWorkerConfig,
  tempDirFullPath: string
): Promise<ViteServerResult> {
  try {
    const server = await createServer({
      plugins: [
        NgmiPolyfill(),
        DynamicPublicDirectory([
          path.join(config.tempDir, "dessn-component-routes/**"),
          path.join("public/**"),
        ]),
        react(),
        svgr({ include: "**/*.svg" }),
        tsconfigPaths({
          projects: ["tsconfig.json"],
        }),

        createHtmlPlugin({
          entry: ".temp/main.tsx",
          template: ".temp/index.html",
        }),
        // nextJsStubsPlugin(tempDirFullPath),
      ],

      publicDir: false,
      define: {
        process: { env: {} },
        global: "globalThis",
      },
      server: {
        port: config.vitePort,
        hmr: false,
        host: "0.0.0.0",
      },
      optimizeDeps: {
        include: [
          "@calcom/lib",
          "@calcom/features",
          "@calcom/prisma",
          "@calcom/dayjs",
          "@calcom/platform-constants",
          "@calcom/platform-types",
          "@calcom/platform-utils",
        ],
        exclude: ["class-transformer/storage"],
      },
      // resolve: {
      //   alias: {
      //     "next/image": path.join(tempDirFullPath, "next/image.tsx"),
      //     "next/link": path.join(tempDirFullPath, "next/link.tsx"),
      //     "next/router": path.join(tempDirFullPath, "next/router.tsx"),
      //     "next/navigation": path.join(tempDirFullPath, "next/navigation.tsx"),
      //   },
      // },
    });

    await server.listen();
    return { type: "started", port: config.vitePort };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return { type: "error", error: errorMessage };
  }
}
