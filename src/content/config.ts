import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleHtml: z.string(),
    subtitle: z.string(),
    category: z.string(),
    date: z.date(),
    readTime: z.string(),
    thumbnail: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    heroImage: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string(),
    }),
    tags: z.array(z.string()),
    author: z.object({
      name: z.string(),
      initial: z.string(),
      bio: z.string(),
    }),
  }),
});

export const collections = { posts };
