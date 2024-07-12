type ImageSerializedType = {
  url: string;
  full_url: string;
  width: number;
  height: number;
  alt: string;
};

type ImageType = {
  id: number;
  meta: {
    type: string;
  };
  image: {
    id: number;
    meta: {
      type: string;
    };
  };
  image_serialized: ImageSerializedType;
};

type ServiceType = {
  title: string;
  text: string;
  button_page: number;
};

type ParentType = {
  id: number;
  meta: {
    type: string;
    detail_url: string;
    html_url: string;
  };
  title: string;
};

export interface ServicesPageInterface {
  id: number;
  meta: {
    type: string;
    detail_url: string;
    html_url: string;
    slug: string;
    show_in_menus: boolean;
    seo_title: string;
    search_description: string;
    first_published_at: string;
    alias_of: null | any;
    parent: ParentType;
  };
  title: string;
  custom_title: string;
  custom_title_selected: string;
  services_images: ImageType[];
  description: string;
  services: {
    type: string;
    value: {
      title: string;
      services: ServiceType[];
    };
    id: string;
  }[];
}
