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

        <section className="mt-4 md:mt-6" aria-label="private-policy">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-50">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-gray-200 mt-10 leading-relaxed mb-6">
            Firefly Spark helps adults coordinate small, near-term plans
            (&ldquo;Sparks&rdquo;). We respect your privacy. This Policy
            explains what we collect, why we collect it, how we use and share
            it, how long we keep it, and what rights you have under Canadian law
            (including PIPEDA) and applicable Ontario law.
          </p>
          <p className="text-base md:text-lg text-gray-200 my-10 pb-10 border-b border-gray-600 leading-relaxed">
            If you have any questions or want to exercise any of your rights set
            out in this privacy notice, please contact us at <ContactEmail />
          </p>
        </section>

        <section className="mt-20" aria-label="private-policy-collect">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
            What we collect
          </h1>
          <p className="text-base md:text-lg text-gray-200 mt-10 leading-relaxed mb-6">
            We collect the minimum needed to run Firefly Spark safely and
            reliably.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Account & profile
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Name, username, date of birth (to determine age/19+ eligibility),
              one profile photo, pronouns (optional), languages (optional).
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Contact info: email, phone (if provided).
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Verification status (see §2).
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            App usage & preferences
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Categories you select, distance/radius per category, time windows,
              age/gender group preferences, group-size comfort.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Spark actions: holds, joins, cancels, late/no-show outcomes,
              Lumins deposits/refunds. Location (precise)
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Location (precise)
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              With your permission, we collect device location to:
            </li>
            <ul className="list-disc ml-6">
              <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
                a) show nearby Sparks;
              </li>
              <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
                b) auto-confirm arrival at/near the venue around start time;
              </li>
              <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
                c) provide proximity signals to your group shortly before a
                Spark (we do not share your exact coordinates with other users).
              </li>
            </ul>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Selfie/ID verification
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              A live selfie and (for some features) an ID image processed by our
              verification vendor IDAnalyzer to help keep the community real and
              reduce fraud (see §2).
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Device & technical
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Device identifiers, OS, app version, language, time zone, crash
              logs, performance events, network IP (for security and
              anti-abuse).
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Communications
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Messages you send to us (support, reports) and, if applicable,
              in-app Spark messages (stored to operate safety/moderation and
              deliver the service).
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Payments (Lumins purchases)
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              We receive purchase confirmations and amounts from Apple/Google;
              we do not collect your full payment card details.
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Website cookies (if you visit our site)
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Strictly necessary cookies; optional analytics cookies (only with
              consent).
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-200 mt-10">
            We do not knowingly collect data from anyone under 18 (see §11).
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="private-policy-id-verification">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
            Special note on selfie/ID verification (biometric data)
          </h1>
          <p className="text-base md:text-lg text-gray-200 mt-10">
            We use IDAnalyzer to process a live selfie (and, if requested, a
            Government-issued ID image) to verify “liveness,” detect duplicates,
            and reduce fraud.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            What we store
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              your profile photo
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              a “verified” flag
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              limited verification metadata (e.g., date/time, pass/fail code,
              risk reason).
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            What we do not keep
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Firefly Spark does not retain biometric templates after
              verification.
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Vendor processing
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              IDAnalyzer processes images on our behalf. We contractually
              require deletion of biometric templates no later than 30 days
              after verification, and earlier where feasible. Processing may
              occur outside Canada (see §6).
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Your consent
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              By completing verification, you consent to the collection and
              processing of your selfie/ID for identity and fraud-prevention
              purposes. You may withdraw consent at any time (see §9), but you
              may not be able to use parts of the service that require
              verification.
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="private-policy-why-collect">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
            Why we collect it
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We use your information to:
          </p>
          <ul className="list-decimal ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Provide the service:</span>&nbsp;
              create/manage your account; show nearby Sparks; process
              holds/auto-joins; manage Lumins deposits/refunds; reveal profiles
              1 hour before start; auto-confirm arrivals by location.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Safety & integrity:</span>&nbsp;
              verify accounts; detect and prevent fraud, spam, or misuse;
              investigate safety reports; enforce our Terms.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Improve the product:</span>&nbsp;
              troubleshoot, analyze features, measure reliability (e.g., your
              private track record tile), and develop new features.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Communicate with you:</span>&nbsp;
              transactional notifications (invites that match your settings,
              roster changes, auto-join, late/no-show outcomes); customer
              support; service notices.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Marketing (consent-based):</span>
              &nbsp; optional tips and updates. You can opt out at any time (see
              §10).
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Legal compliance:</span>&nbsp;
              comply with law, respond to lawful requests, and protect our
              rights and users.
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section
          className="mt-20"
          aria-label="private-policy-do-not-sell-personal-info"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
            We do not sell your personal information
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We share only as needed to run Firefly Spark
          </p>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Service providers (processors):
              </span>
              &nbsp;
            </li>
            <ul className="list-decimal ml-6">
              <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
                <span className="font-semibold">Verification:</span>&nbsp;
                IDAnalyzer (selfie/ID).
              </li>
              <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
                <span className="font-semibold">Maps/Location:</span>&nbsp;
                Apple/Google Maps.
              </li>
              <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
                <span className="font-semibold">Notifications:</span>&nbsp;
                Apple/Google push.
              </li>
              <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
                <span className="font-semibold">Analytics/Crash:</span>&nbsp;
                standard mobile analytics & crash reporting.
              </li>
              <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
                <span className="font-semibold">Payments:</span>&nbsp; Apple App
                Store / Google Play (Lumins purchases). Providers are bound by
                contracts to use data only to provide services to us.
              </li>
            </ul>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Your Spark members:</span>&nbsp;
              Your name and photo are shown only to other members of your Spark
              starting ~1 hour before the start time (and not to others).
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Legal & safety:</span>&nbsp; To a
              government authority or third party when required by law or to
              protect the rights, safety, or property of Firefly Spark, our
              users, or the public.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Business transfers:</span>&nbsp;
              In connection with a merger, acquisition, financing, or sale of
              assets. We will continue to protect your data and notify you of
              material changes.
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-200 mt-10">
            We do not share your exact live location with other users. Pre-start
            proximity is shown only as simple distance bands to other confirmed
            members.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section
          className="mt-20"
          aria-label="private-policy-keeping-information"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
            How long we keep information
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We keep data only as long as necessary for the purposes above, then
            delete or de-identify it.
          </p>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Account & profile: for your account&rsquo;s life; delete on
              account deletion (subject to legal retention).
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Verification images/biometrics: Firefly Spark does not retain
              biometric templates; live selfie/ID images are purged by our
              vendor per contract within 30 days; we keep a verification
              “pass/fail” record.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Location pings for attendance: granular arrival pings are retained
              up to 30 days; de-identified analytics may be retained longer.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Spark metadata (holds/joins/penalties): retained while your
              account is active + up to 2 years for fraud prevention and audit.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Support tickets & safety reports: 2&ndash;7 years depending on
              issue type and legal hold.
            </li>{" "}
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Logs & analytics: 90&ndash;365 days depending on type.
            </li>{" "}
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Backups: periodic backups roll off on a set schedule (typically
              ≤35 days).
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-200 mt-10">
            (If law requires longer retention—for example, for dispute
            resolution—we retain only what&rsquo;s necessary.)
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="private-policy-processing-data">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
            Where we store and process data (cross-border transfers)
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            Firefly Spark and its processors may store or process data outside
            Canada (e.g., the United States). We use contractual and technical
            safeguards (including standard contractual clauses or equivalent) to
            protect personal information when it is transferred across borders.
            By using the service, you understand your information may be
            processed outside your province and outside Canada, subject to
            foreign laws.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="private-policy-security">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
            Security
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We use industry-standard safeguards to protect personal information,
            including encryption in transit and at rest, access controls, and
            least-privilege access. No system is 100% secure. If we learn of a
            breach that creates a real risk of significant harm, we will notify
            you and the appropriate regulators as required by law.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="private-policy-canadian-law">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
            Your right under Canadian law
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            Under PIPEDA, you have the right to:
          </p>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Access the personal information we hold about you;
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Correct inaccurate information;
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Withdraw consent for future processing (where processing is based
              on consent);
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Challenge our compliance with PIPEDA; and
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              File a complaint with the Office of the Privacy Commissioner of
              Canada (OPC).
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-200 mt-10">
            To exercise your rights, contact us at <ContactEmail />. We may take
            steps to verify your identity and will respond within the timelines
            set by law. If we cannot fulfill a request (e.g., it would reveal
            another person&rsquo;s data or is subject to legal privilege), we
            will tell you why.
          </p>

          <h2 className="text-base md:text-lg text-gray-200 mt-10 font-semibold">
            Regulator contacts
          </h2>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            Office of the Privacy Commissioner of Canada:&nbsp;
            <a href="https://www.priv.gc.ca" className="text-green-500">
              www.priv.gc.ca
            </a>
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            (If applicable, you may also have rights under provincial law.)
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="private-policy-marketing-casl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
            Marketing & CASL
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We comply with Canada&rsquo;s Anti-Spam Legislation (CASL). We send
            transactional messages (e.g., invites that fit your settings, roster
            changes, attendance outcomes) as part of the service. We send
            marketing messages only with your consent or as permitted by law.
            You can unsubscribe at any time via in-app controls or by emailing{" "}
            <ContactEmail />.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="private-policy-children">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
            Children
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            Firefly Spark is for adults 18+ only. We do not knowingly collect
            personal information from individuals under 18. If we learn an
            account belongs to someone under 18, we will delete it and its
            information.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="private-policy-decision-making">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
            Automated decision-making
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We use basic automation to select and prioritize invites that match
            your settings (categories, distance, time windows, group
            preferences) and to manage auto-join when a Spark meets its minimum.
            We do not make decisions that produce legal or similarly significant
            effects solely by automated means. You can adjust your inputs
            anytime in Settings.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section
          className="mt-20"
          aria-label="private-policy-third-party-services"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
            Third-pary links & services
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            The app may link to third-party sites or services (venues,
            ticketing, maps). Their privacy practices are governed by their own
            policies, not ours.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="private-policy-changes">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
            Changes to this Policy
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We may update this Policy from time to time. If we make material
            changes, we will notify you in-app or by email and update the
            “Effective date.” If you continue to use Firefly Spark after the
            changes take effect, you agree to the updated Policy.
          </p>

          <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20 mb-40" aria-label="private-policy-contact">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
            How to contact us
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10 font-semibold">
            Gallop Innovations Inc. (Firefly Spark)
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed font-semibold">
            Email: <ContactEmail />
          </p>
        </section>
      </div>
    </main>
  );
}
