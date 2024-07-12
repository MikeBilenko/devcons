export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServicesDetailData {
  id: string;
  type: string;
  value: {
    faqs: FaqItem[];
    title: string;
  };
}

export interface FAQInterface {
  faqs: ServicesDetailData;
}
