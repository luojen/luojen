export type Project = {
    color: string;
    id: string;
    name: string;
    organization: string;
    tags: string[];
    role: string;
    year: string;
    total_cards: number;
    card_1: string;
    card_2: string;
    card_3: string;
    card_4: string;
  }
  
export type Data = Project[];