import sanityClient from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { createPreviewSubscriptionHook } from 'next-sanity';
import { PortableTextComponent } from '@portabletext/react';

const config = {
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: '2021-10-21',
  useCdn: false,
  ignoreBrowserTokenWarning: true,
};

export const client = sanityClient(config);
export const usePreviewSubscription = createPreviewSubscriptionHook(config);
export const urlFor = source => createImageUrlBuilder(config).image(source);
export const PortableText = (props) => <PortableTextComponent components={{}} {...props} />
