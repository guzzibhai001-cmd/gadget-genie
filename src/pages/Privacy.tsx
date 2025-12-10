import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-h1 font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: December 10, 2024</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information you provide directly, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Account Information:</strong> Name, email, phone number, password</li>
                  <li><strong>KYC Documents:</strong> Aadhaar number/College ID for identity verification</li>
                  <li><strong>Payment Information:</strong> Bank account details for payouts, card information (processed securely via Razorpay)</li>
                  <li><strong>Listing Data:</strong> Photos, descriptions, specifications of gadgets</li>
                  <li><strong>Communications:</strong> Messages between users, support interactions</li>
                  <li><strong>Location:</strong> Pickup/delivery addresses for bookings</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">2. Automatically Collected Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you use EletroRent, we automatically collect:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Device information (type, operating system, browser)</li>
                  <li>IP address and general location</li>
                  <li>Usage data (pages viewed, features used, search queries)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We use collected information to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related notifications</li>
                  <li>Verify user identities and prevent fraud</li>
                  <li>Facilitate communication between renters and owners</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Respond to support requests and inquiries</li>
                  <li>Analyze usage patterns to improve user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">4. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We share your information only in these circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>With Other Users:</strong> Your profile, listings, and necessary contact details for bookings</li>
                  <li><strong>Service Providers:</strong> Payment processors (Razorpay), cloud services, analytics providers</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We do not sell your personal information to third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures including encryption in transit and at rest, secure servers, access controls, and regular security audits. However, no system is completely secure, and we cannot guarantee absolute security of your data.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your information for as long as your account is active or as needed to provide services. KYC documents are stored for regulatory compliance (minimum 5 years). After account deletion, we retain certain data for 30 days before permanent deletion, unless required by law to retain longer.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access and download your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, contact us at privacy@eletrorent.in or through account settings.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">8. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar technologies for authentication, preferences, analytics, and advertising. You can control cookies through your browser settings, though some features may not work properly without them.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">9. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  EletroRent is not intended for users under 18 years of age. We do not knowingly collect information from children. If we learn we have collected information from a minor, we will delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">10. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy periodically. We will notify you of material changes via email or in-app notification. Continued use after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For privacy-related questions or concerns, please contact our Data Protection Officer at{" "}
                  <a href="mailto:privacy@eletrorent.in" className="text-primary hover:underline">
                    privacy@eletrorent.in
                  </a>{" "}
                  or write to us at: EletroRent Privacy Team, WeWork Galaxy, Residency Road, Bangalore - 560025, India.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
