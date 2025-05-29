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
    // Define your data structure here
    id?: string;
    title?: string;
    // Add other properties as needed
    [key: string]: any;
  };
}
