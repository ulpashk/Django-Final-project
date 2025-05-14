export type LibraryItem = {
  id: number;
  name: string;
  type: 'folder' | 'test';
  mastery: number | null;
  progress: number | null;
  questions: number | null;
  created: string;
};
