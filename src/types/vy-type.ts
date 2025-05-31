export interface Opportunity {
  id: string;
  title: string;
  state: string;
  city: string;
  tags?: string[];
  description: string;
  location?: string;
  date?: string;
  role?: string;
  image?: string;
  details?: string;
  images?: string[];
  category?: string;
  duration?: string;
}

export interface OpportunityDetailProps {
  data: {
    id?: string;
    title?: string;
    [key: string]: any;
  };
}
