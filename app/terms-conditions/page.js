export const metadata = {
  title: "Terms & Conditions | DevLLz",
  description:
    "Review the terms and conditions governing the use of DevLLz services and website.",
};

export default function TermsConditionsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="text-gray-400 mb-6">
        These terms govern your use of the DevLLz website and services.
        By accessing or using our services, you agree to these terms.
      </p>

      <section className="space-y-4 text-gray-300">
        <p>
          <strong>Services:</strong> DevLLz provides web development, SEO,
          social media marketing, and related digital services.
        </p>

        <p>
          <strong>Payments:</strong> All payments must be made as agreed.
          Services begin only after payment confirmation unless stated otherwise.
        </p>

        <p>
          <strong>Intellectual Property:</strong> All content, designs, and
          materials created by DevLLz remain our intellectual property
          until full payment is received.
        </p>

        <p>
          <strong>Liability:</strong> DevLLz is not responsible for business
          losses, ranking guarantees, or third-party service disruptions.
        </p>

        <p>
          <strong>Termination:</strong> We reserve the right to suspend or
          terminate services if terms are violated.
        </p>
      </section>
    </main>
  );
}
