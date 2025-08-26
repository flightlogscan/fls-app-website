import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – Flight Log Scan",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-8 p-8 text-center">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>

      <div className="max-w-prose text-left space-y-6">
        <p className="italic text-sm">Last updated: April&nbsp;5&nbsp;2025</p>

        <p>
          This Privacy Policy ("Policy") governs the collection, use, disclosure,
          and management of user data by <strong>WilLance LLC</strong> ("we," "us," or "our")
          in relation to your use of the FlightLogScan application
          ("FlightLogScan", "flightlogscan", or "App"). It is essential that you carefully
          read and understand this Policy as it outlines our practices regarding your personal
          information and how we handle and safeguard it. By using FlightLogScan, you explicitly
          consent to the collection, use, and disclosure of your personal information as described herein.
        </p>

        <h2 className="text-xl font-semibold">1. Collection of Personal Information</h2>
        <h3 className="font-semibold">1.1 User Provided Information</h3>
        <p>
          When you use FlightLogScan, we may collect personal information directly from you.
          This includes but is not limited to information such as your name, email address,
          and contact details that you provide to us voluntarily.
        </p>

        <h3 className="font-semibold">1.2 Scan Data</h3>
        <p>
          FlightLogScan allows you to scan handwritten text to digitize it. FlightLogScan does not
          store log data on its servers. It is important to note that log scans, including their
          associated data, may be transmitted to Microsoft, Amazon, or OpenAI servers to enable
          the scanning. Please review their privacy policies.
        </p>

        <h3 className="font-semibold">1.3 Usage Information</h3>
        <p>
          We may automatically collect information regarding your use of FlightLogScan, including
          the features accessed, content viewed, and actions taken. This information aids us in
          understanding your interactions with the App, enhancing its performance, and improving
          the overall user experience.
        </p>

        <h3 className="font-semibold">1.4 Device and Log Information</h3>
        <p>
          We may gather certain information about the device you use to access FlightLogScan,
          including device type, operating system version, unique device identifiers, IP address,
          and crash logs, to ensure optimal functionality and diagnose technical issues.
        </p>

        <h2 className="text-xl font-semibold">2. Use of Personal Information</h2>
        <h3 className="font-semibold">2.1 Provision and Improvement of FlightLogScan</h3>
        <p>
          We utilize the personal information collected to provide and maintain FlightLogScan,
          enhance its features and functionality, and personalize your experience. Furthermore,
          we may employ this information to respond to your inquiries, fulfill your requests,
          and communicate with you regarding updates and developments concerning the App.
        </p>

        <h3 className="font-semibold">2.2 Legal Compliance and Protection</h3>
        <p>
          We may employ your personal information to ensure compliance with applicable laws,
          regulations, legal processes, or governmental requests. Additionally, we may use
          the information to protect the rights, privacy, safety, or property of WilLance LLC,
          its users, and the general public.
        </p>

        <h2 className="text-xl font-semibold">3. Disclosure of Personal Information</h2>
        <h3 className="font-semibold">3.1 Service Providers</h3>
        <p>
          We may share your personal information with trusted third-party service providers who
          assist us in the provision and improvement of FlightLogScan. These service providers
          are bound by strict confidentiality obligations and are authorized to process your
          information solely for the purposes specified by us.
        </p>

        <h3 className="font-semibold">3.2 Business Transfers</h3>
        <p>
          In the event of a merger, acquisition, or sale of all or a portion of our assets, your
          personal information may be transferred to the acquiring entity or third party as part
          of the transaction. We undertake to take appropriate measures to maintain the
          confidentiality and security of your personal information during such transfers.
        </p>

        <h3 className="font-semibold">3.3 Legal Requirements</h3>
        <p>
          We may disclose your personal information if required to do so by law or if we believe,
          in good faith, that such disclosure is necessary to protect our rights, comply with a
          judicial proceeding, court order, or legal process, or to prevent imminent harm or
          financial loss.
        </p>

        <h2 className="text-xl font-semibold">4. Data Security</h2>
        <p>
          We employ reasonable organizational, technical, and administrative measures to protect
          your personal information from unauthorized access, disclosure, alteration, or
          destruction. However, please be aware that no method of transmission over the internet
          or electronic storage is entirely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold">5. Third-Party Links and Services</h2>
        <p>
          FlightLogScan may contain links to third-party websites, services, or applications that
          are not operated or controlled by us. This Policy does not apply to such third-party
          services, and we assume no responsibility for their privacy practices. We strongly
          recommend reviewing the privacy policies of these third-party services before providing
          any personal information to them.
        </p>

        <h2 className="text-xl font-semibold">6. Children’s Privacy</h2>
        <p>
          FlightLogScan is not intended for use by individuals under the age of 18. We do not
          knowingly collect personal information from children. If you become aware that your
          child has provided us with personal information without your consent, please contact
          us using the information provided in Section 8.
        </p>

        <h2 className="text-xl font-semibold">7. Changes to this Policy</h2>
        <p>
          We reserve the right to modify this Policy from time to time to reflect changes in our
          information practices. Any material changes to the Policy will be communicated by
          posting an updated version on our website or through other appropriate means. Your
          continued use of FlightLogScan after the effective date of the updated Policy
          constitutes your acceptance of the revised terms.
        </p>

        <h2 className="text-xl font-semibold">8. Contact Us</h2>
        <p>
          If you have any questions, concerns, or wish to exercise your rights regarding your
          personal information under applicable data protection laws, please contact us at:
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