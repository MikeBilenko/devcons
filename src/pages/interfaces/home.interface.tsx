interface MetaInterface {
  alias_of: any; // Adjust the type based on actual use case, if alias_of can be null or an object
  detail_url: string;
  first_published_at: string;
  html_url: string;
  parent: any; // Adjust the type based on actual use case, if parent can be null or an object
  search_description: string;
  seo_title: string;
  show_in_menus: boolean;
  slug: string;
  type: string;
}
interface ServiceInterface {
  // Define the properties of a service object here
  // Placeholder properties as an example:
  title: string;
  description: string;
}

export interface HomePageInterface {
  id: number;
  meta: MetaInterface;
  services: ServiceInterface[];
  subtitle: string;
  title: string;
}
