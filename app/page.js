// app/page.js

export const metadata = {
  title: "DevLLz | Web Development, SEO & Social Media for Startups",
  description:
    "DevLLz helps startups and small businesses grow with modern web development, SEO optimization, and social media marketing.",
};

import HomeClient from "./HomeClient"; 

export default function HomePage() {
  return <HomeClient />;
}
