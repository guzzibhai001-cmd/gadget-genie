import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-h1 font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: December 10, 2024</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using EletroRent ("the Platform"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all users, including renters, owners, and visitors.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  EletroRent is a peer-to-peer marketplace that connects gadget owners with individuals seeking to rent electronics. We facilitate the listing, discovery, booking, and payment processes but are not a party to the rental agreements between users. We do not own, manufacture, or supply any of the gadgets listed on our platform.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">3. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To use our services, you must create an account and provide accurate, complete information. You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Completing KYC verification for full access to features</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">4. Renter Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">As a renter, you agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Use rented gadgets responsibly and for lawful purposes only</li>
                  <li>Return gadgets in the same condition received, accounting for normal wear</li>
                  <li>Adhere to the agreed rental period and pickup/return arrangements</li>
                  <li>Pay all fees, including rental charges, deposits, and applicable taxes</li>
                  <li>Report any damage or issues immediately to the owner and EletroRent</li>
                  <li>Not sublease, sell, or transfer the rented gadget to third parties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">5. Owner Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">As an owner, you agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate descriptions, photos, and specifications of your gadgets</li>
                  <li>Ensure gadgets are in good working condition and safe to use</li>
                  <li>Honor confirmed bookings and communicate promptly with renters</li>
                  <li>Set fair and transparent pricing, including deposits</li>
                  <li>Report any issues with renters or returns promptly</li>
                  <li>Comply with all applicable laws regarding the rental of electronics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">6. Payments and Fees</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  EletroRent charges a 10% service fee from owners on successful rentals. Renters pay the rental amount plus a security deposit. Deposits are held in escrow and released after successful returns. Payouts to owners are processed weekly.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cancellation fees may apply based on timing. Refunds for cancelled bookings are processed within 5-7 business days.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">7. Disputes and Damage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In case of disputes regarding damage or returns, either party may raise a claim within 48 hours of the rental end date. EletroRent will review evidence from both parties and make a binding decision. Owners may be compensated from the security deposit for verified damages. EletroRent's decision is final.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  EletroRent acts as a platform facilitating transactions between users. We are not liable for the quality, safety, or legality of listed gadgets, the accuracy of listings, or the ability of users to complete transactions. Our total liability shall not exceed the amount of fees paid to us in the relevant transaction.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">9. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to suspend or terminate your account at our discretion for violations of these terms, fraudulent activity, or other conduct that we deem harmful to users or our platform. Users may close their account at any time through settings, subject to completion of pending transactions.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the revised terms. We will notify users of material changes via email or in-app notifications.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-semibold mb-4 text-foreground">11. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:legal@eletrorent.in" className="text-primary hover:underline">
                    legal@eletrorent.in
                  </a>
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

export default Terms;
