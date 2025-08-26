import Link from "next/link";

export const metadata = {
  title: "Terms of Service – Flight Log Scan",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-8 p-8 text-center">
      <h1 className="text-3xl font-bold">Terms of Service</h1>

      <div className="max-w-prose text-left space-y-6">
        <p className="italic text-sm">Last updated: April&nbsp;5&nbsp;2025</p>

        <p>
          From everyone at <strong>WilLance LLC</strong>, thank you for using our products!
          We build them to help you do your best work. Because we don’t know every one of our
          customers personally, we have to put in place some Terms of Service to help keep
          the ship afloat.
        </p>

        <p>
          When we say "Company", "we", "our", or "us" in this document, we are referring to
          WilLance LLC.
        </p>
        <p>
          When we say "Services", we mean our websites, including{" "}
          <a href="https://flightlogscan.com" className="underline">
            flightlogscan.com
          </a>
          , and any product created and maintained by WilLance LLC. That includes FlightLogScan,
          whether delivered within a web browser, desktop application, mobile application,
          or another format.
        </p>
        <p>
          When we say "You" or "your", we are referring to the people or organizations that
          own an account with one or more of our Services.
        </p>
        <p>
          We may update these Terms of Service ("Terms") in the future. Typically these changes
          have been to clarify some of these terms by linking to an expanded related policy.
          Whenever we make a significant change to our policies, we will refresh the date at
          the top of this page and take any other appropriate steps to notify account holders.
        </p>
        <p>
          When you use our Services, now or in the future, you are agreeing to the latest Terms.
          There may be times where we do not exercise or enforce a right or provision of the Terms;
          however, that does not mean we are waiving that right or provision. These Terms do
          contain a limitation of our liability.
        </p>
        <p>
          If you violate any of the Terms, we may terminate your account. That’s a broad statement
          and it means you need to place a lot of trust in us. We do our best to deserve that trust
          by being open about who we are, how we work, and keeping an open door to your feedback.
        </p>

        <h2 className="text-xl font-semibold">1. Account Terms</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            You are responsible for maintaining the security of your account and password and for
            ensuring that any of your users do the same. The Company cannot and will not be liable
            for any loss or damage from your failure to comply with this security obligation.
          </li>
          <li>
            You are responsible for all content posted to and activity that occurs under your account,
            including content posted by and activity of any users in your account.
          </li>
          <li>You must be a human. Accounts registered by "bots" or other automated methods are not permitted.</li>
        </ul>

        <h2 className="text-xl font-semibold">2. Payment, Refunds, and Plan Changes</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            For paid Services that offer a free trial, we explain the length of trial when you sign up.
            After the trial period, you need to pay in advance to keep using the Service. If you do
            not pay, we will freeze your account and it will be inaccessible until you make payment.
            If your account has been frozen for a while, we will queue it up for auto-cancellation.
          </li>
          <li>
            If you are upgrading from a free plan to a paid plan, we will charge your card immediately
            and your billing cycle starts on the day of upgrade. For other upgrades or downgrades,
            the new rate starts from the next billing cycle.
          </li>
          <li>
            All fees are exclusive of taxes, levies, or duties imposed by taxing authorities. Where required,
            we will collect those taxes on behalf of the taxing authority and remit them. Otherwise, you
            are responsible for all such payments.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">3. Cancellation</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>You are solely responsible for properly canceling your account. Within each Service, we provide a cancellation link.</li>
          <li>
            All of your content will be inaccessible from the Services immediately upon account cancellation.
            Within 30 days, all content will be permanently deleted from active systems and logs.
            Within 60 days, all content will be permanently deleted from backups.
          </li>
          <li>
            If you cancel before the end of your current paid month, your cancellation takes effect immediately,
            and you will not be charged again. We do not prorate unused time.
          </li>
          <li>
            We may suspend or terminate your account and refuse use of the Services at any time.
            Suspension blocks access. Termination deletes your account and content.
          </li>
          <li>Abuse of Company staff (verbal, physical, written, or otherwise) results in immediate termination.</li>
        </ul>

        <h2 className="text-xl font-semibold">4. Modifications to Pricing</h2>
        <p>
          Sometimes we change pricing. Usually existing customers are exempt, but not always.
          If we change your price, we will give at least 30 days notice and notify you via email.
        </p>

        <h2 className="text-xl font-semibold">5. Uptime, Security, and Privacy</h2>
        <p>Your use of the Services is at your sole risk. Services are provided “as is” and “as available.”</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            We may disable accounts that significantly exceed average usage. We will try to contact the owner first.
          </li>
          <li>
            We secure your data with backups, redundancies, and encryption. Some edge cases may be unencrypted.
          </li>
          <li>
            You agree that WilLance LLC may process your data as described in our Privacy Policy.
            Our staff may access data only in specific cases: to help with support, to fix errors, for security,
            or when required by law.
          </li>
          <li>
            We use third-party vendors and hosting partners to run the Services.
          </li>
          <li>
            Under the California Consumer Privacy Act (CCPA), WilLance LLC is a “service provider,” not a “business.”
            We process your data only for the purposes you signed up for and not for other commercial use.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">6. Copyright and Content Ownership</h2>
        <p>
          All content posted must comply with U.S. copyright law. You give us a limited license to use your
          posted content to provide the Services, but ownership remains with you.
        </p>
        <p>
          We do not pre-screen content, but we may refuse or remove content in our discretion.
          The Company owns all rights to the Services. You may not duplicate, copy, or reuse any portion
          without permission. Requests to use logos must be sent to us.
        </p>
        <p>
          You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Services
          without our written permission.
        </p>

        <h2 className="text-xl font-semibold">7. Features and Bugs</h2>
        <p>
          We design our Services with care, but not every feature will please everyone.
          Bugs happen; we fix priority ones, especially security or privacy related.
          We do not guarantee error-free Services.
        </p>

        <h2 className="text-xl font-semibold">8. Liability</h2>
        <p>
          You expressly agree that WilLance LLC is not liable for any direct, indirect, incidental, lost profits,
          or other damages resulting from use of the Services, inability to use, procurement of substitutes,
          unauthorized access, or other matters relating to these Terms or the Services.
        </p>
        <p>
          In other words: choosing to use our Services is making a bet on us. If it doesn’t work out,
          that’s on you. We work hard to make that bet safe through good management, investment,
          and care.
        </p>

        <h2 className="text-xl font-semibold">9. Contact</h2>
        <p>
          If you have a question about these Terms, please contact us at:
          <br />
          <a href="mailto:support@flightlogscan.com" className="underline">
            support@flightlogscan.com
          </a>
        </p>
      </div>

      <Link
        href="/"
        className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300"
      >
        ← Back to home
      </Link>
    </main>
  );
}