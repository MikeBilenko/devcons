export interface StageInterface {
  title: string;
  description: string;
}

export interface StagesInterface {
  id: string;
  type: string;
  value: {
    title: string;
    stages: StageInterface[];
  };
}
