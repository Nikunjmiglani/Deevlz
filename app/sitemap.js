export default function sitemap() {
  const baseUrl = "https://devllz.in";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/services/web-development`, lastModified: new Date() },
    { url: `${baseUrl}/services/social-media`, lastModified: new Date() },
    { url: `${baseUrl}/students`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/terms-conditions`, lastModified: new Date() },
    { url: `${baseUrl}/careers`, lastModified: new Date() },
  ];
}
