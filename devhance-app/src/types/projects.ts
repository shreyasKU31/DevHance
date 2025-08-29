export interface Project {
  _id: string;
  authorId: string;
  slug: string;
  title: string;
  problem: string;
  contribution: string;
  techStack: string[];
  outcomesAndLearnings: string;
  links: {
    liveDemo?: string;
    repository?: string;
  };
  createdAt: string;
  updatedAt: string;
}
