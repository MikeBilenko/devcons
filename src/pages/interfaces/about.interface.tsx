export interface Image {
  image_serialized: {
    alt: string;
    height: number;
    width: number;
    url: string;
    full_url: string; // Assuming 'full_url' exists in your data
  };
}

type IconSerialized = {
  alt: string;
  full_url: string;
  height: number;
  url: string;
  width: number;
};

interface WhyUsOrderable {
  description: string;
  icon_serialized: IconSerialized;
  id: number;
  title: string;
}

export interface AboutPageInterface {
  about_images: Image[];
  company_description: string;
  company_image_serialized: {
    alt: string;
    url: string;
    width: number;
    height: number;
  };
  about_why_us: WhyUsOrderable[] | [];
  custom_title: string;
  custom_title_selected: string;
  description: string;
  id: number;
  meta: {
    type: string;
    detail_url: string;
    html_url: string;
    slug: string;
    show_in_menus: boolean;
    // Other meta properties here
    [key: string]: any; // If meta properties vary, you can use an index signature
  };
  team_members: {
    id: number;
    meta: {
      type: string;
      // Meta properties here
      [key: string]: any; // If meta properties vary, you can use an index signature
    };
    // Other team member properties here
  }[];
  title: string;
  trusted_partners: any[]; // You can define a type for trusted partners if needed
}
