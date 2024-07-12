interface MetaInterface {
  detail_url: string;
  download_url: string;
  tags: string[];
  type: string;
}

export interface ImageInterface {
  id: number;
  title: string;
  width: number;
  height: number;
  meta: MetaInterface;
}

export interface WhyInterface {
  description: string;
  title: string;
  icon: number;
}

export interface WhysListInterface {
  id: string;
  type: string;
  value: {
    title: string;
    why_sections: WhyInterface[];
  };
}
