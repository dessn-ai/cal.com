import { useCallback } from "react";

// Basic navigation hooks and functions that mirror Next.js navigation
export function useRouter() {
  const push = useCallback((path: string) => {
    console.log("Navigation stub: push to", path);
  }, []);

  const replace = useCallback((path: string) => {
    console.log("Navigation stub: replace with", path);
  }, []);

  const back = useCallback(() => {
    console.log("Navigation stub: go back");
  }, []);

  const forward = useCallback(() => {
    console.log("Navigation stub: go forward");
  }, []);

  return {
    push,
    replace,
    back,
    forward,
    prefetch: () => {},
  };
}

export function usePathname() {
  return "/";
}

export function useSearchParams() {
  return new URLSearchParams();
}

export function redirect(path: string) {
  console.log("Navigation stub: redirect to", path);
}

// No-op navigation functions
export const useNavigation = () => ({
  state: "idle",
  pending: false,
});

export default {
  useRouter,
  usePathname,
  useSearchParams,
  redirect,
  useNavigation,
};
