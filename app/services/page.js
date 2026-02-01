// app/services/page.js

export const metadata = {
  title: "Digital Services for Startups & Businesses | DevLLz",
  description:
    "Explore DevLLz services including Web Development, SEO, Social Media Marketing, and complete digital growth packages for startups and businesses.",
};

import ServicesClient from "./ServicesClient";

export default function ServicesPage() {
  return <ServicesClient />;
}
