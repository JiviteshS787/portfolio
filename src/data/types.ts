export interface MediaSlot {
  label: string;
  src: string | null;
  type: 'image' | 'video';
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Software' | 'Hardware';
  featured: boolean;
  date: string;
  outcome: string;
  problem: string | null;
  built: string[];
  role: string | null;
  result: string | null;
  stack: string[];
  repo: string | null;
  media: MediaSlot[];
}
