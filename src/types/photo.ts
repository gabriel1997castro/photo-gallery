export interface Photo {
  id: number;
  src: { medium: string; large: string };
  photographer: string;
  width: number;
  height: number;
  alt: string;
  avg_color: string;
  photographer_url: string;
}
