export const metadata = {
  title: "Careers at DevLLz | Work With Us",
  description:
    "Explore career opportunities at DevLLz. Join our team of developers, designers, and marketers.",
};

export default function CareersPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-6">Careers at DevLLz</h1>

      <p className="text-gray-400 max-w-3xl mb-10">
        We’re always looking for talented developers, designers, and digital
        marketers who care about quality, growth, and real-world impact.
      </p>

      <section className="space-y-6 text-gray-300 max-w-3xl">
        <div>
          <h2 className="text-xl font-semibold mb-2">We're Actively Looking for:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Video Editors</li>
            <li>Social Media Managers</li>
            
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">How to Apply</h2>
          <p>
            Send your resume or portfolio to{" "}
            <a
              href="mailto:Deevlz.info@gmail.com"
              className="text-green-400 hover:underline"
            >
              Deevlz.info@gmail.com
            </a>
            . We’ll reach out if there’s a fit.
          </p>
        </div>
      </section>
    </main>
  );
}
