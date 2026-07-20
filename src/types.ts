export interface CardDetail {
  id: string;
  title: string;
  type: 'Workshop' | 'Story' | 'Tool' | 'Buy Now' | 'Read More' | 'Event' | 'Custom';
  description?: string;
  tag?: string;
  colorClass: string; // Tailwind bg class
  customBgColor?: string; // Custom hex color for custom cards
  textColorClass: string; // Tailwind text class
  details?: {
    date?: string;
    duration?: string;
    format?: string;
    location?: string;
    author?: string;
    linkUrl?: string;
    image?: string;
    longDescription?: string;
  };
  isCustom?: boolean;
}

export type CardTypeFilter = 'All' | 'Workshop' | 'Story' | 'Tool' | 'Buy Now' | 'Read More' | 'Event';

export interface StokeChallenge {
  id: string;
  title: string;
  tagline: string;
  duration: string; // e.g., "2 mins"
  instructions: string[];
  materials?: string;
}
