import { createClient } from 'next-sanity';

const config = {
  projectId: 'vwbfu8ui',
  dataset: 'production',
  // If your Sanity project is private, you can add the token here
  // token: 'your-token',
  useCdn: true, // Enable the Content Delivery Network (CDN)
};

const client = createClient(config);

export default client;
