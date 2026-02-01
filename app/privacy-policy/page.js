export const metadata = {
  title: "Privacy Policy | DevLLz",
  description:
    "Read DevLLz's privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Privacy Policy
      </h1>

      <p className="text-gray-300 mb-10">
        At DevLLz, we respect your privacy and are committed to protecting
        any information you share with us.
      </p>

      <section className="space-y-6 max-w-3xl text-gray-300">
        <p>
          <strong>Information We Collect:</strong> We may collect basic
          information such as your name, email address, phone number, and
          business details when you contact us or use our services.
        </p>

        <p>
          <strong>How We Use Information:</strong> Information is used solely
          to communicate with you, provide our services, improve our offerings,
          and respond to inquiries.
        </p>

        <p>
          <strong>Data Protection:</strong> We do not sell, rent, or trade your
          personal data. Reasonable security measures are used to protect
          information from unauthorized access.
        </p>

        <p>
          <strong>Third-Party Services:</strong> We may use third-party tools
          (analytics, hosting, communication services) that follow their own
          privacy policies.
        </p>

        <p>
          <strong>Consent:</strong> By using our website, you consent to this
          privacy policy.
        </p>
      </section>
    </main>
  );
}
