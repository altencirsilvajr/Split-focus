export type Category =
  | 'Abstract'
  | 'Minecraft'
  | 'Satisfying'
  | 'Subway Surfers'
  | 'Trackmania';

export type BrainrotVideo = {
  id: string;
  title: string;
  category: Category;
  source: number;
};
