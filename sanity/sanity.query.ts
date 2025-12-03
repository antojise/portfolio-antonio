import { createClient } from "@sanity/client";
import groq from "groq";

const clientConfig = {
  projectId: "rswm4klg",
  dataset: "production-v2",  
  apiVersion: "2024-12-01",
  useCdn: false,
};

const client = createClient(clientConfig);

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"][0]{
      ...,
      "profileImage": profileImage.asset->url
    }`
  );
}


export async function getJob() {
  return client.fetch(
    groq`*[_type == "job"] | order(startDate desc)`
  );
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(completionDate desc) {
      _id,
      name,
      "slug": slug.current,
      category,
      featured,
      gap,
      solution,
      impact,
      technologies,
      projectUrl,
      completionDate,
      "coverImage": coverImage.asset->url,
    }`
  );
}
