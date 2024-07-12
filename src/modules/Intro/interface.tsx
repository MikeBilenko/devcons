export interface Image {
  image_serialized: {
    alt: string;
    height: number;
    width: number;
    url: string;
    full_url: string; // Assuming 'full_url' exists in your data
  };
}

export interface IntroInterface {
  title: string;
  title_underlined: string;
  images: Image[];
  description: string;
}
