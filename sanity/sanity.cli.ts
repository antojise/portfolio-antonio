import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "rswm4klg",
  dataset: "production",
  apiVersion: "2024-12-01",
  useCdn: false,
};

const client = createClient(config);

export default client;
