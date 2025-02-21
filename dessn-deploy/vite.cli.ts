import path from "path";
import {
  startViteServer,
  DEFAULT_CONFIG,
  type ViteWorkerConfig,
} from "./vite.core";

function parseCommandLineArgs(): Partial<ViteWorkerConfig> {
  const config: Partial<ViteWorkerConfig> = {};

  for (const arg of process.argv.slice(2)) {
    if (!arg.startsWith("--")) continue;

    const [key, value] = arg.slice(2).split("=");
    if (!value) continue;

    switch (key) {
      case "vitePort":
        config.vitePort = parseInt(value, 10);
        break;
      case "tempDir":
        config.tempDir = value;
        break;
      case "basePath":
        config.basePath = value;
        break;
      case "codebasePath":
        config.codebasePath = value;
        break;
    }
  }

  return config;
}

async function main() {
  const cliConfig = parseCommandLineArgs();
  const config = { ...DEFAULT_CONFIG, ...cliConfig };

  const tempDirFullPath = path.join(
    process.cwd(),
    config.basePath || "",
    config.tempDir
  );

  const codebasePath = path.join(process.cwd(), config.basePath || "");

  const finalConfig = { ...config, codebasePath };

  console.log("Starting Vite server with config:", finalConfig);

  const result = await startViteServer(finalConfig, tempDirFullPath);
  if (result.type === "started") {
    console.log(`Vite server started on port ${result.port}`);
  } else {
    console.error("Failed to start Vite server:", result.error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.log("LOOOL", process.cwd());
  console.error("Fatal error:", error);
  process.exit(1);
});
