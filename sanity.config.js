import sanityClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';
import { createPreviewSubscriptionHook } from 'next-sanity';
import { PortableTextComponent } from '@portabletext/react';

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
  ignoreBrowserTokenWarning: true,
};

export const client = sanityClient(config);
export const usePreviewSubscription = createPreviewSubscriptionHook(config);
export const imgSrc = source => createImageUrlBuilder(config).image(source);
export const PortableText = (props) => <PortableTextComponent components={{}} {...props} />
