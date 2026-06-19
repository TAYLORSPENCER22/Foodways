export interface CountryCard {
    id: string;
    name: string;
    slug: string;
    countryFlagUrl?: string;
    countryImageUrl?: string;
    description?: string;
    foodCards: FoodCard[]; 
}

export interface FoodCard {
  id: string;
  name: string;
  slug: string;
  description: string;
  story: string;
  imageUrl?: string;
  regionLabel?: string;
  ingredients: string[];
  countryId: string;
}