export interface Project {
  _id: string;
  title: string;
  slug: string;
  problem: string;
  contribution: string;
  techStack: string[];
  content: any;
  outcomesAndLearnings: string;
  media: string[];
  links: {
    liveDemo?: string;
    repository?: string;
  };
  createdAt: string;
  updatedAt: string;
}
