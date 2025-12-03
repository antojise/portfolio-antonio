import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage?: string; // Mudou aqui - agora é string (URL)
  shortBio: string;
  email: string;
  fullBio?: PortableTextBlock[];
  location: string;
  resumeURL?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  skills?: string[];
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo?: string;
  url?: string;
  description: string;
  startDate: string;
  endDate?: string;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  category: string;
  featured: boolean;
  gap: string;
  solution: string;
  impact: string;
  technologies?: string[];
  projectUrl?: string;
  completionDate?: string;
  coverImage?: string;
};
