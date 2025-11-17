import Link from "next/link";

export const metadata = {
  title: "FAQ – Flight Log Scan",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-8 p-8 text-center">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>

      <div className="max-w-prose text-left space-y-6">
        <p className="italic text-sm">
          Customer support:{" "}
          <a href="mailto:support@flightlogscan.com" className="underline">
            support@flightlogscan.com
          </a>
        </p>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            What platforms is FlightLogScan available on?
          </h2>
          <p>FlightLogScan is currently available exclusively on iOS.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            What do I do about the error: &ldquo;Something went wrong with the
            request, please re-scan the file&rdquo;?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Please reach out to the team at{" "}
              <a
                href="mailto:support@flightlogscan.com"
                className="underline"
              >
                support@flightlogscan.com
              </a>
              .
            </li>
            <li>
              Include the following details if possible:
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Log image you tried to scan</li>
                <li>Approximate submission time of scan with error</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            What do I do if my scan is stuck on the loading circle?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Please note that scans can take 1-2 minutes to complete.</li>
            <li>
              If your scan is stuck on the loading circle for more than a couple
              of minutes, please reach out to the team at{" "}
              <a
                href="mailto:support@flightlogscan.com"
                className="underline"
              >
                support@flightlogscan.com
              </a>
              .
            </li>
            <li>
              Include the following details if possible:
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Log image you tried to scan</li>
                <li>Approximate submission time of scan that is stuck</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            What do I do about the error &ldquo;Max file size exceeded, try
            cropping your image&rdquo;?
          </h2>
          <p>
            FlightLogScan is limited to scanning images that are 4 megabytes or
            smaller. Please try the following steps:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Use the FlightLogScan crop button to make the image as small as
              possible while including the full log.
            </li>
            <li>
              Adjust your camera settings to lower the quality of the image,
              which will make its size smaller.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            How can I improve the quality of my scan?
          </h2>
          <h3 className="font-semibold">Best practices</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Make sure handwritten logs have readable, neat, and bold text.</li>
            <li>Include both pages of the log.</li>
            <li>Use well-lit images.</li>
            <li>Position the camera directly above the log (not at an angle).</li>
            <li>Ensure the log takes up most of the frame.</li>
          </ul>
          <h3 className="font-semibold">Avoid</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Wrinkles or tears in the log.</li>
            <li>Shadows across the page.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            Can I store my scanned logs in the cloud?
          </h2>
          <p>
            Yes. To store a scanned log in the cloud, you must be logged in to
            your iCloud account. Once you are logged in, the download button
            after a scan will default to your iCloud folder.
          </p>
        </section>
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
