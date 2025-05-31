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
  maxVolunteers?: number;
  skills?: string[];
  owner_name?: string;
}

export interface OpportunityDetailProps {
  data: Partial<Opportunity>;
}


export interface Reviews{
  id:string;
  name:string;
  review: string;
  member_since:Date;
  rating: number;
  date:Date;
  opportunity_id:number;
}
