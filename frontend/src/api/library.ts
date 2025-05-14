import type { LibraryItem } from '../types/library';

export async function fetchLibraryItems(): Promise<LibraryItem[]> {
  const res = await fetch('http://127.0.0.1:8000/api/library-items/');
  if (!res.ok) {
    throw new Error('Failed to fetch library items');
  }
  return res.json();
}
