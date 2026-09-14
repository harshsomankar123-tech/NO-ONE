export interface Project {
  id: string;
  title: string;
  category: 'all' | 'ai' | 'hardware';
  tags: string[];
  description: string;
  metrics?: { label: string; value: string }[];
  client?: string;
  focus?: string;
  year?: string;
  imageUrl?: string;
  type?: 'featured' | 'standard';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}
