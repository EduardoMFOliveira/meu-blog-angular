export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: Date;
  tags: string[];
  readTime: number;
  imageUrl?: string;
}