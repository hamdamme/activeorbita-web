"use client";

import { useSyncExternalStore } from "react";
import { itemKey, maxItems, maxQuantity, parseBasket, validQuantity, type QuoteItem } from "@/lib/quote-basket";

const storageKey = "active-orbit-quote-v1";
const empty: QuoteItem[] = [];
let items = empty;
let loaded = false;
let persistent = true;
const listeners = new Set<() => void>();

function load() {
  if (loaded) return;
  loaded = true;
  try { items = parseBasket(localStorage.getItem(storageKey)); }
  catch { persistent = false; }
}
function onStorage(event: StorageEvent) {
  if (event.key !== storageKey && event.key !== null) return;
  items = parseBasket(event.newValue);
  listeners.forEach((listener) => listener());
}
function subscribe(listener: () => void) {
  load();
  if (!listeners.size) window.addEventListener("storage", onStorage);
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (!listeners.size) window.removeEventListener("storage", onStorage);
  };
}
function save(next: QuoteItem[]) {
  items = next;
  try { localStorage.setItem(storageKey, JSON.stringify({ version: 1, items })); persistent = true; }
  catch { persistent = false; }
  listeners.forEach((listener) => listener());
}
export function addQuoteItem(item: QuoteItem) {
  load();
  if (!validQuantity(item.quantity)) return false;
  const existing = items.find((row) => itemKey(row) === itemKey(item));
  if (existing && existing.quantity + item.quantity > maxQuantity) return false;
  if (!existing && items.length >= maxItems) return false;
  save(existing ? items.map((row) => row === existing ? { ...row, quantity: row.quantity + item.quantity } : row) : [...items, item]);
  return true;
}
export function updateQuoteQuantity(key: string, quantity: number) {
  if (validQuantity(quantity)) save(items.map((item) => itemKey(item) === key ? { ...item, quantity } : item));
}
export function removeQuoteItem(key: string) { save(items.filter((item) => itemKey(item) !== key)); }
export function useQuoteBasket() {
  const basket = useSyncExternalStore(subscribe, () => items, () => empty);
  const ready = useSyncExternalStore(subscribe, () => loaded, () => false);
  return { items: basket, ready, persistent };
}
