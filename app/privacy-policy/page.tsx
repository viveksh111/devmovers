import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | DevMovers",
  description: "How DevMovers collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main className="pt-40 pb-32 px-6 max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest text-yellow-400 uppercase mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm">
            Last updated: <span className="text-zinc-400">April 2026</span>
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-10" />

        <div className="prose prose-invert prose-zinc max-w-none space-y-10 text-zinc-400 text-sm leading-relaxed">

          <Section title="1. Introduction">
            DevMovers (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-500">
              <li><strong className="text-zinc-300">Personal Information:</strong> Name, email address, phone number, and company details you provide via our contact form.</li>
              <li><strong className="text-zinc-300">Project Information:</strong> Details about your project or business that you voluntarily share with us.</li>
              <li><strong className="text-zinc-300">Usage Data:</strong> Information automatically collected when you visit our site, including IP address, browser type, pages visited, and time spent.</li>
              <li><strong className="text-zinc-300">Cookies:</strong> Small files stored on your device to improve your experience. See Section 6 for details.</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-500">
              <li>Respond to inquiries and provide requested services</li>
              <li>Send project updates, proposals, and communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Send marketing communications (only with your consent)</li>
            </ul>
          </Section>

          <Section title="4. How We Store & Protect Your Information">
            We take data security seriously. Your information is stored securely and we use industry-standard encryption and security measures to protect it. Contact form submissions are stored in a private Google Sheet accessible only to our team, and emails are processed via Resend, a SOC 2-compliant email service provider. We do not sell, trade, or rent your personal information to third parties.
          </Section>

          <Section title="5. Third-Party Services">
            <p>We may use the following third-party services that process your data:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-500">
              <li><strong className="text-zinc-300">Resend</strong> — for transactional email delivery</li>
              <li><strong className="text-zinc-300">Google Sheets</strong> — for secure lead storage</li>
              <li><strong className="text-zinc-300">Vercel</strong> — for website hosting and analytics</li>
              <li><strong className="text-zinc-300">Calendly</strong> — for booking discovery calls</li>
            </ul>
            <p className="mt-3">Each of these services has their own privacy policies which we encourage you to review.</p>
          </Section>

          <Section title="6. Cookies">
            Our website uses essential cookies to function correctly. We do not currently use tracking or advertising cookies. You can control cookie settings through your browser settings. Disabling cookies may affect some website functionality.
          </Section>

          <Section title="7. Your Rights">
            <p>Depending on your location, you may have the following rights regarding your data:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-500">
              <li>Right to access the personal data we hold about you</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to request deletion of your data</li>
              <li>Right to object to or restrict processing</li>
              <li>Right to data portability</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact us at <a href="mailto:info@devmovers.com" className="text-yellow-400 hover:underline">info@devmovers.com</a>.</p>
          </Section>

          <Section title="8. Data Retention">
            We retain your personal information only as long as necessary to fulfil the purposes described in this policy, comply with legal obligations, or resolve disputes. Contact form data is typically retained for up to 2 years.
          </Section>

          <Section title="9. Children's Privacy">
            Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
          </Section>

          <Section title="10. Changes to This Policy">
            We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the &quot;Last updated&quot; date at the top of this page. Continued use of our website after changes constitutes acceptance of the updated policy.
          </Section>

          <Section title="11. Contact Us">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
            <div className="mt-4 p-5 rounded-xl border border-white/5 bg-white/2 space-y-2">
              <p className="text-white font-semibold">DevMovers</p>
              <p><a href="mailto:info@devmovers.com" className="text-yellow-400 hover:underline">info@devmovers.com</a></p>
              <p><Link href="/contact" className="text-yellow-400 hover:underline">Contact Form →</Link></p>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-bold text-white mb-3">{title}</h2>
      <div className="text-zinc-400 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
