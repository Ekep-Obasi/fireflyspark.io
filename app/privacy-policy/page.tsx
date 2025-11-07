import Header from "@/components/Header";
import ScrollTop from "@/components/ScrollTop";
import FadeIn from "@/components/FadeIn";

function ContactEmail() {
  return (
    <a href="mailto:hello@fireflyspark.io" className="text-green-500">
      hello@fireflyspark.io
    </a>
  );
}

export default function PPPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)] px-6 py-8 md:px-10 md:py-10">
      <div className="max-w-7xl mx-auto">
        <ScrollTop />
        <FadeIn delay={0}>
          <Header />
        </FadeIn>

        <section className="mt-4 md:mt-6" aria-label="privacy-policy">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-50">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            <span className="font-semibold">Effective date:&nbsp;</span>
            November 7, 2025
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            <span className="font-semibold">Company:&nbsp;</span>
            Gallop Innovations Inc. (doing business as Firefly Spark)
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            <span className="font-semibold">Contact:&nbsp;</span>
            <ContactEmail />
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            <span className="font-semibold">Address:&nbsp;</span>
            24 Borrows Street, Thornhill, Ontario, L4J 2S4, Canada
          </p>
          <p className="text-base md:text-lg text-gray-200 mt-10 leading-relaxed mb-6">
            Firefly Spark helps adults coordinate small, near term plans
            (&ldquo;Sparks&rdquo;). We respect your privacy. This Policy
            explains what we collect, why we collect it, how we use and share
            it, how long we keep it, and what rights you have under Canadian law
            (including PIPEDA) and applicable Ontario law.
          </p>
          <p className="text-base md:text-lg text-gray-200 my-10 pb-10 border-b border-gray-600 leading-relaxed">
            If you have any questions or want to exercise your privacy rights,
            contact us at <ContactEmail />.
          </p>
        </section>

        <section className="mt-20" aria-label="privacy-policy-collect">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            1. What we collect
          </h1>
          <p className="text-base md:text-lg text-gray-200 mt-10 leading-relaxed mb-6">
            We collect the minimum needed to run Firefly Spark safely and
            reliably.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Account and profile
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Name, username, date of birth or age range (to confirm 18+ or
              19+)
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              One profile photo that you upload
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Pronouns (optional)
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Languages (optional)
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Contact info such as email and, if you provide it, phone
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Verification status
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            App usage and preferences
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Spark categories you select
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Distance or radius per category
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Time windows and availability
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Age or gender group preferences and group size comfort
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Spark actions such as holds, joins, cancels, late or no show
              outcomes
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Lumins deposits and refunds
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Location (with permission)
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            We collect device location when you allow it. We use it to:
          </p>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              show nearby Sparks
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              auto confirm arrival at or near the venue around start time
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              provide simple proximity signals to your Spark group shortly
              before start
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            We do not show your exact coordinates to other users.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Device and technical
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Device identifiers
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Operating system, app version, language, time zone
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Crash logs and performance events
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              IP address for security and anti abuse
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Communications
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Messages you send to us (support, safety reports)
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              In app messages where storage is needed to deliver the service and
              support safety and moderation
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Payments, subscriptions and Lumins purchases
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              We receive purchase confirmations from Apple or Google, including
              product identifier, currency and amount
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              We do not receive or store your full payment card details
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              For auto renewing subscriptions, Apple or Google also processes
              your payment and their privacy policies apply
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Website cookies
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            If you visit our site, we may use strictly necessary cookies and
            optional analytics cookies (with consent).
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            We do not knowingly collect from children
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            Firefly Spark is for adults 18 and older.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="privacy-policy-face-data">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            2. Face data and verification
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            What face data we collect
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              A single profile photo that you upload
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              When you choose to verify, a one time selfie captured during
              verification
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            We do not collect facial data from your camera on a continuous
            basis. We do not collect face data for advertising.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Why we collect it
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            We collect and process face data in order to:
          </p>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              verify that your verification selfie matches your profile photo
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              prevent impersonation and fake accounts
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              detect obvious fraud
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              maintain community safety so that people are meeting real users
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            This matches the purpose stated in our Terms (safety and integrity).
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Where it is stored and processed
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              We do not share face data with advertisers or other third parties
              for marketing
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Storage and processing is handled by Amazon Web Services (AWS) in
              the United States
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Profile photos are stored in Amazon S3
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Verification selfies are processed one time using Amazon
              Rekognition to compare the selfie to your profile photo. After the
              comparison, the verification selfie is discarded
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            This means the comparison happens on AWS infrastructure and the
            result is what we keep.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            How long we keep it
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Verification selfie:</span>{" "}
              deleted immediately after the one time comparison is completed
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Profile photo:</span> retained
              until you replace it, delete it, close your account, or request
              removal
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            We honor deletion requests for profile photos within 30 days.
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            We still keep a small verification record (for example date, success
            or failure, and the reason code) so we can defend the integrity of
            the platform.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="privacy-policy-why-collect">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            3. Why we collect information
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We use your information to:
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Provide the service
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            Create and manage your account, show nearby Sparks, process holds
            and auto joins, manage Lumins deposits and refunds, reveal profiles
            1 hour before start, auto confirm arrival by location, and unlock
            paid participation features if you have an active subscription.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Safety and integrity
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            Verify accounts, detect and prevent fraud, impersonation or
            duplicate accounts, investigate safety reports, and enforce our
            Terms of Service.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Improve the product
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            Troubleshoot, analyze features, measure reliability, and develop new
            features.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Communicate with you
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            Send transactional notifications such as invites that match your
            settings, roster changes, auto join, late or no show outcomes,
            account changes, and support responses.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Marketing (consent based)
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            Send optional tips and updates. You can opt out at any time.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Legal compliance
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            Comply with law, respond to lawful requests, and protect our rights
            and users.
          </p>

          <p className="text-base md:text-lg text-gray-200 mt-10 font-semibold">
            We do not sell your personal information.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="privacy-policy-sharing">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            4. What we share and with whom
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We share only what is needed to operate Firefly Spark.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Service providers (processors)
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Cloud hosting and storage: AWS (including S3 and Rekognition,
              located in the United States)
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Maps and location: Apple or Google Maps
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Notifications: Apple and Google push services
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Analytics and crash reporting: standard mobile analytics
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Payments and subscriptions: Apple App Store and Google Play Store
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            These providers are contractually required to use the data only to
            provide services to us.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Your Spark members
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            Your name and photo are shown only to other members of your Spark
            starting about 1 hour before the start time. They are not shown to
            everyone on the platform.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            No sharing of face data for ads
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            We do not share face data, selfies, or profile photos with
            advertisers or ad networks.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Legal and safety
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            We may disclose information if required by law or if we believe it
            is necessary to protect the rights, safety, or property of Firefly
            Spark, our users, or the public.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Business transfers
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            If we are involved in a merger, acquisition, financing, or sale of
            assets, your information may be transferred as part of that
            transaction. We will continue to protect your data and notify you of
            material changes.
          </p>

          <p className="text-base md:text-lg text-gray-200 mt-10">
            We do not share your exact live location with other users. If we
            show pre start proximity, we show it as simple distance bands to
            confirmed members.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="privacy-policy-retention">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            5. How long we keep information
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We keep information only as long as needed for the purposes above,
            then delete or de identify it.
          </p>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Profile photo:</span> kept until
              you replace it, delete it, close your account, or ask us to delete
              it. We aim to honor deletion requests within 30 days.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Verification selfie:</span>{" "}
              deleted immediately after the one time comparison in AWS
              Rekognition.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Verification record (pass/fail):
              </span>{" "}
              we keep a small record of the verification result and timestamp
              for fraud prevention and audit.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Account and profile:</span> for
              your account&rsquo;s life. Deleted on account deletion, subject to
              legal retention.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Location pings for attendance:
              </span>{" "}
              detailed arrival pings up to 30 days. De identified analytics may
              be kept longer.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Spark metadata (holds, joins, penalties):
              </span>{" "}
              while your account is active plus up to 2 years for fraud
              prevention and audit.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Support tickets and safety reports:
              </span>{" "}
              2 to 7 years depending on type and legal hold.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Logs and analytics:</span> 90 to
              365 days depending on type.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Backups:</span> periodic backups
              roll off on a set schedule (typically 35 days or less).
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-200 mt-10">
            If law requires longer retention, we retain only what is necessary.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="privacy-policy-cross-border">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            6. Where we store and process data
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            Firefly Spark and its service providers may store or process
            information outside your province and outside Canada, including in
            the United States. This includes storage in AWS in the United States
            for profile photos and for the one time verification comparison.
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            We use contractual and technical safeguards to protect personal
            information when it is transferred across borders. By using the
            service you understand your information may be processed in other
            countries and may be available to local authorities under their
            laws.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="privacy-policy-security">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            7. Security
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We use industry standard safeguards to protect personal information.
            This includes encryption in transit and at rest where appropriate,
            access controls, and least privilege access. No system is perfectly
            secure. If we learn of a breach that creates a real risk of
            significant harm, we will notify you and the appropriate regulators
            as the law requires.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="privacy-policy-rights">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            8. Your rights under Canadian law
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            Under PIPEDA you have the right to:
          </p>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              access the personal information we hold about you
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              correct inaccurate information
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              withdraw consent for future processing where processing is based
              on consent
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              challenge our compliance with PIPEDA
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              file a complaint with the Office of the Privacy Commissioner of
              Canada at{" "}
              <a href="https://www.priv.gc.ca" className="text-green-500">
                https://www.priv.gc.ca
              </a>
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-200 mt-10">
            To exercise your rights, contact us at <ContactEmail />. We may need
            to verify your identity. If we cannot fulfill a request, for example
            because it would reveal another person&rsquo;s information or is
            subject to legal privilege, we will tell you why.
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            You may also have rights under provincial privacy law if it applies.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="privacy-policy-marketing">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            9. Marketing and CASL
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We comply with Canada&rsquo;s Anti Spam Legislation (CASL). We send
            transactional messages that are required to run the service. We send
            marketing messages only with your consent or as permitted by law.
            You can unsubscribe at any time in app or by emailing{" "}
            <ContactEmail />.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="privacy-policy-children">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            10. Children
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            Firefly Spark is for adults 18 and older. We do not knowingly
            collect personal information from individuals under 18. If we learn
            an account belongs to someone under 18, we will delete the account
            and its information.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section
          className="mt-20"
          aria-label="privacy-policy-automated-decisions"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            11. Automated decision making
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We use basic automation to match Sparks to your preferences, to run
            auto join when a Spark hits its minimum, and to detect obvious
            abuse. We do not make decisions that produce legal or similarly
            significant effects solely by automated means. You can change your
            settings at any time.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="privacy-policy-third-party">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            12. Third party links and services
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            The app may link to third party sites or services such as venues,
            ticketing, or maps. Their privacy practices are governed by their
            own policies, not ours.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="privacy-policy-changes">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            13. Changes to this Policy
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We may update this Policy from time to time. If we make material
            changes, we will notify you in app or by email and update the
            effective date. If you continue to use Firefly Spark after the
            changes take effect, you agree to the updated Policy.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20 mb-40" aria-label="privacy-policy-contact">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            How to contact us
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10 font-semibold">
            Gallop Innovations Inc. (Firefly Spark)
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed font-semibold">
            Email: <ContactEmail />
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed font-semibold">
            Address: 24 Borrows Street, Thornhill, Ontario, L4J 2S4, Canada
          </p>
        </section>
      </div>
    </main>
  );
}
