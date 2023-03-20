export interface ShowEntity {
  id: string;
  name: string;
  genres: string[];
  premiered: string;
  rating: { average: string };
  image: { medium: string, original: string };
}
