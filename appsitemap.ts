export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://eqbstudio.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}