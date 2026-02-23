import { twMerge } from "tailwind-merge";

function cn(...classes: (string | false | null | undefined)[]): string {
  return twMerge(classes.filter(Boolean).join(" "));
}

function formatItems(items: string[]): { key: string; content: string }[] {
  return items.map((content, index) => ({ key: `item-${index}`, content }));
}

export { cn, formatItems };
