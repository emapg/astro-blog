import Fuse from 'fuse.js';

export interface SearchItem {
  title: string;
  description: string;
  slug: string;
}

export function createSearchIndex(items: SearchItem[]) {
  return new Fuse(items, {
    keys: ['title', 'description'],
    threshold: 0.3,
    includeScore: true,
  });
}

export function search(searchIndex: Fuse<SearchItem>, query: string) {
  if (!query.trim()) {
    return [];
  }
  return searchIndex.search(query);
}