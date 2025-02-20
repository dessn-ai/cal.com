import { useMemo } from "react";
import type { z } from "zod";

export function useFilterValue<T>(columnId: string, schema: z.ZodType<T>) {
  return useMemo(() => undefined, [columnId, schema]);
}