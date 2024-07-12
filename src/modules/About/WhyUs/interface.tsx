type IconSerialized = {
  alt: string;
  full_url: string;
  height: number;
  url: string;
  width: number;
};

export interface WhyUsOrderable {
  description: string;
  icon_serialized: IconSerialized;
  id: number;
  title: string;
}
