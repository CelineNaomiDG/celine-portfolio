import type { MetadataRoute } from 'next';
import { websitePackages } from './services/website-packages';
const base = 'https://celine-portfolio-flame.vercel.app';
export default function sitemap(): MetadataRoute.Sitemap {
 return ['', '/services', '/en/services', '/services/websites', '/services/software-apps', '/services/socialmedia-design', '/services/onderhoud', '/services/prijsindicatie', '/services/voorbeelden', '/services/contact', ...websitePackages.map(p=>`/services/websites/${p.slug}`)].map(path=>({url:base+path}));
}
