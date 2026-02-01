// app/services/social-media/page.js

export const metadata = {
  title: "Social Media Marketing Services for Businesses | DevLLz",
  description:
    "Strategic social media marketing services to grow reach, engagement, and inbound leads for businesses.",
};

import SocialMediaClient from "./SocialMediaClient";

export default function SocialMediaPage() {
  return <SocialMediaClient />;
}
