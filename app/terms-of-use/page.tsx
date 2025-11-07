import Header from "@/components/Header";
import ScrollTop from "@/components/ScrollTop";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

function ContactEmail() {
  return (
    <a href="mailto:hello@fireflyspark.io" className="text-green-500">
      hello@fireflyspark.io
    </a>
  );
}

function PP() {
  return (
    <Link href="/privacy-policy" className="text-green-500">
      Privacy Policy
    </Link>
  );
}

export default function TermsPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)] px-6 py-8 md:px-10 md:py-10">
      <div className="max-w-7xl mx-auto">
        <ScrollTop />
        <FadeIn delay={0}>
          <Header />
        </FadeIn>

        <section className="mt-4 md:mt-6" aria-label="terms-of-service">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-50">
            Terms of Service and End User License Agreement
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            <span className="font-semibold">Effective date:&nbsp;</span>
            November 7, 2025
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            <span className="font-semibold">Company:&nbsp;</span>
            Gallop Innovations Inc. (doing business as Firefly Spark) (
            <span className="font-semibold">
              &quot;Firefly Spark,&quot; &quot;we,&quot; &quot;us,&quot;
              &quot;our&quot;
            </span>
            )
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            <span className="font-semibold">
              Support and legal contact:&nbsp;
            </span>
            <ContactEmail />
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            <span className="font-semibold">Mailing address:&nbsp;</span>
            24 Borrows Street, Thornhill, Ontario, L4J 2S4, Canada
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed mt-10">
            By creating an account, using the app, or starting or joining a
            Spark (defined below), you agree to these Terms and to our <PP />.
            If you do not agree, do not use Firefly Spark.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 pb-10 border-b border-gray-600">
            This agreement is between you and Gallop Innovations Inc. only. It
            is not with Apple. Apple and Apple&rsquo;s subsidiaries are
            third-party beneficiaries of the App Store sections and may enforce
            them after you accept these Terms.
          </p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-definitions">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            1) Key definitions
          </h1>
          <ul className="list-disc ml-6 mt-10">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Spark:&nbsp;</span>a user-created
              plan for an in-person activity at a time and place chosen by
              users.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Hold / Hold my spot:&nbsp;</span>a
              conditional reservation that counts toward a Spark&apos;s minimum.
              You are not in the roster until the minimum is met.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Auto-join:&nbsp;</span>when a Hold
              converts to a confirmed seat because the Spark meets the minimum
              participants.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Lumins:&nbsp;</span>in-app points
              used as deposits to promote reliability. Lumins are not money,
              have no cash value, and are not redeemable for cash.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Platform-Seeded Spark:&nbsp;
              </span>
              a Spark posted by Firefly Spark, including via accounts we
              operate, with or without Firefly Spark attribution or branding, to
              stimulate supply or showcase ideas. It is a curated listing only
              and is not organized or supervised by Firefly Spark.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Official Firefly Spark Event:&nbsp;
              </span>
              a plan explicitly labeled in-app as &quot;Official Firefly Spark
              Event,&quot; presented with separate Official Event Terms and
              Waiver at join. Unless a Spark is labeled this way, it is not an
              Official Firefly Spark Event.
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed py-2 mt-6">
            <span className="font-semibold">Important:&nbsp;</span>
            whether or not a Spark appears to be started by Firefly Spark or by
            an account we operate, if it is not labeled &quot;Official Firefly
            Spark Event,&quot; it is a User-Started or Platform-Seeded Spark and
            is not organized or hosted by Firefly Spark.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-who-may-use">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            2) Who may use Firefly Spark
          </h1>
          <ul className="list-disc ml-6 mt-10">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Age.&nbsp;</span>You must be 18 or
              older to use Firefly Spark. Activities marked 19+ require that you
              are 19 or older.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Territory.&nbsp;</span>We
              currently operate in Ontario (including the GTA/Toronto).
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Account.&nbsp;</span>Provide
              accurate information and keep your credentials secure. You are
              responsible for all activity under your account. We may refuse,
              suspend, or terminate accounts to protect users, comply with law,
              or safeguard the service.
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section
          className="mt-20"
          aria-label="terms-of-service-what-is-firefly-spark"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            3) What Firefly Spark is (and is not)
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed py-2 mt-10">
            <span className="font-semibold">Firefly Spark is a platform.</span>{" "}
            We help adults discover and coordinate small, same-day or near-term
            user-organized activities. We do not plan, organize, host, supervise,
            or control Sparks (User-Started or Platform-Seeded), venues, or
            transportation. We do not guarantee that Sparks will occur, fill, or
            meet expectations. We do not provide background checks, security, or
            insurance. You are solely responsible for your decisions and personal
            safety.
          </p>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed py-2 mt-6">
            If we ever run an Official Firefly Spark Event, it will be clearly
            labeled in-app and require acceptance of Official Event Terms and
            Waiver at join. If you do not see that label and waiver, the Spark
            is not organized by Firefly Spark.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-subscriptions">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            4) Subscriptions and paid access
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed py-2 mt-10">
            Firefly Spark uses auto-renewing subscriptions from the Apple App
            Store to unlock core participation features.
          </p>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed py-2">
            You can browse or view the map and see the types of Sparks available
            without paying.
          </p>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed py-2">
            To join Sparks, start Sparks, be invited or matched to Sparks, or
            use other participation features shown in the app, you must have an
            active subscription.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            Available subscription products
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed py-2">
            We may offer one or more of the following in-app, for example a
            weekly access plan, a monthly membership, or a yearly membership. The
            exact name, term, and price of each subscription are the ones shown
            in the App Store at the time you make the purchase. If the App Store
            information differs from these Terms, the App Store information
            controls.
          </p>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed py-2">
            Prices may change. We may change, add, or remove subscription plans
            or prices prospectively. If Apple requires it, you will see the new
            price in the App Store and can choose whether to continue.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-50 mt-8 mb-4">
            How billing works
          </h2>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Payment is charged to your Apple ID at confirmation of purchase.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Subscriptions renew automatically for the same term unless you
              cancel at least 24 hours before the current period ends.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              Your Apple ID is charged for renewal within 24 hours before the
              period ends at the price shown at that time in the App Store.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              You can manage or cancel your subscription in your Apple ID or App
              Store account settings. We cannot cancel it for you.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              If you cancel, you keep access until the end of the period you
              already paid for. We do not give partial refunds unless required
              by Apple or by law.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              If your subscription ends or is not renewed, participation features
              will stop working until you resubscribe. You will still be able to
              open the app and see permitted free areas.
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-sparks">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            5) Creating, holding, joining, and changing Sparks
          </h1>
          <ul className="list-disc ml-6 mt-10">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Hold my spot.&nbsp;</span>Tapping
              Hold conditionally reserves a seat and counts toward the minimum.
              You are not in the roster until the minimum is met through
              Auto-join. You may release a Hold any time before Auto-join.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Auto-join and leaving after join.&nbsp;
              </span>
              When the minimum is met, you are in. If you leave after joining,
              penalties apply (see Section 7).
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Group change (below your minimum).&nbsp;
              </span>
              If a Spark drops below your original minimum but still has 3 or
              more people, we may prompt you to Stay in at the new size or Leave
              free. If you do not respond by the stated time, we may auto-remove
              you without penalty.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Duo confirm (exactly 2).&nbsp;
              </span>
              If only two people remain before start, both must confirm &quot;Go
              1-on-1?&quot; within the stated time. If not, the Spark cancels
              and deposits are refunded.
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-lumins">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            6) Lumins (deposits) and purchases
          </h1>
          <ul className="list-disc ml-6 mt-10">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Nature of Lumins.&nbsp;</span>
              Lumins are in-app points used as deposits to promote reliability.
              Lumins are not legal tender, have no cash value, are not redeemable
              or refundable for cash, are licensed to you and not sold, and may
              be modified, limited, or discontinued prospectively.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Deposit.&nbsp;</span>Starting or
              joining a Spark requires a 10 Lumin deposit, unless the app shows a
              different amount for that Spark.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Purchases.&nbsp;</span>If you run
              out of Lumins, you may purchase more via Apple or Google in-app
              purchase. All Lumin purchases are final except where platform
              policy or applicable law requires a refund. Taxes may apply. We may
              change prices prospectively.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                No transfer or resale.&nbsp;
              </span>
              You may not sell, barter, or transfer Lumins except within features
              we explicitly enable.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Account closure.&nbsp;</span>On
              account termination (by you or us), unused Lumins are forfeited to
              the extent permitted by law.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Tickets and fees.&nbsp;</span>For
              Platform-Seeded Sparks (including any unattributed house-posted
              listings), each participant is responsible for their own tickets or
              fees with any venue or provider. Lumins are not tickets and do not
              purchase goods or services from Firefly Spark.
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-attendance">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            7) Attendance, late, and cancellations (deposits and penalties)
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            Attendance is auto-confirmed by device location near the venue at or
            after start. If location is disabled, open the app at the venue so we
            can confirm.
          </p>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Cancel after you have joined (any time):&nbsp;
              </span>
              minus 10 Lumins (deposit used).
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Arrive 0 to 15 minutes after start:&nbsp;
              </span>
              no penalty (you keep 10).
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Arrive more than 15 to 30 minutes after start:&nbsp;
              </span>
              minus 5 Lumins.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Arrive more than 30 minutes after start or never arrive:&nbsp;
              </span>
              minus 10 Lumins (treated as no-show).
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mt-6">
            We may adjust deposit amounts and penalties prospectively with in-app
            notice. For Platform-Seeded listings (including house-posted), we do
            not guarantee venue capacity, entry, or availability. Venue or
            provider rules apply.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-verification">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            8) Verification, privacy, and location
          </h1>
          <ul className="list-disc ml-6 mt-10">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Selfie or ID verification.&nbsp;
              </span>
              We may require a quick selfie check and, for certain features, an
              ID check provided by our verification vendor (currently Biometric
              Vision) to reduce fake accounts and fraud. You consent to our and
              our vendor&apos;s processing of images and biometric identifiers
              for verification, fraud prevention, and safety. See our <PP /> for
              details and retention.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Private by default.&nbsp;
              </span>
              Your name and photo are visible only to members of your Spark
              beginning about 1 hour before start. Otherwise they are not visible
              to other users.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Location.&nbsp;</span>We use device
              location to show nearby Sparks and to auto-confirm arrival at or
              near the venue around start time. We do not show exact live
              location to other users. If location is off, open the app at the
              venue so attendance can be confirmed.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Emergencies.&nbsp;</span>Firefly
              Spark is not an emergency service. In an emergency, call 911.
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-conduct">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            9) Conduct and safety rules
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            You agree to:
          </p>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                be lawful and respectful.&nbsp;
              </span>
              No harassment, hate, threats, stalking, doxxing, sexual
              exploitation, fraud, or illegal acts
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                follow venue rules and law,&nbsp;
              </span>
              including 19+ alcohol rules
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                not bring weapons, illegal drugs, or engage in dangerous conduct
              </span>
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">respect privacy&nbsp;</span>
              and not record or post others&apos; likenesses without consent
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">use reports&nbsp;</span>
              and report issues via in-app tools or by email to <ContactEmail />
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mt-6">
            We may remove content or suspend accounts if we believe there is a
            violation or a safety risk.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-content">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            10) Your content, license, and feedback
          </h1>
          <ul className="list-disc ml-6 mt-10">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              You retain rights in content you submit, such as Spark titles or
              notes, messages, and photos.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              You grant Firefly Spark a worldwide, non-exclusive, royalty-free
              license to host, store, reproduce, adapt, display, and use your
              content to operate, secure, and improve the service and to promote
              the service. To the extent permitted by law, you waive moral-rights
              enforcement against us for these purposes.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              You represent that you have rights to your content and that it does
              not infringe the rights of others or violate law.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              If you provide feedback, you grant us a perpetual, irrevocable,
              royalty-free license to use it without restriction or attribution.
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-no-organizer">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            11) No organizer or host; no special relationship
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            For User-Started, Platform-Seeded, and unattributed house-posted
            Sparks, Firefly Spark acts only as a platform provider and curator.
            We are not an organizer or host and we do not owe a duty to supervise
            participants, venues, or third parties. Nothing in these Terms
            creates an agency, partnership, joint venture, employment, fiduciary,
            or special relationship between you and Firefly Spark. The fact that
            a Spark was posted by an account we operate, whether or not it
            displays Firefly Spark branding, does not make it an Official Firefly
            Spark Event or create a duty to supervise.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-risk">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            12) Assumption of risk and release
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            Real-world activities involve risks including travel, weather, venue
            conditions, illness, crime, and actions or omissions of others. You
            knowingly and voluntarily assume all risks related to attending or
            hosting a Spark.
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            To the maximum extent permitted by law, you release and discharge
            Firefly Spark (Gallop Innovations Inc.) and our officers, directors,
            employees, and agents from claims, demands, losses, damages, or
            expenses (including for negligence) arising out of or related to
            interactions with users, attendance at Sparks (including
            Platform-Seeded or house-posted listings), or third-party services or
            venues, except to the extent caused by our wilful misconduct.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-disclaimers">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            13) Disclaimers
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            To the maximum extent permitted by law, Firefly Spark is provided
            &quot;as is&quot; and &quot;as available.&quot; We disclaim all
            warranties, express or implied, including merchantability, fitness
            for a particular purpose, quiet enjoyment, and non-infringement. We
            do not warrant that Sparks will fill, occur, or meet expectations, or
            that the service will be uninterrupted, timely, secure, or
            error-free. Map or location data may be inaccurate or incomplete.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-liability">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            14) Limitation of liability
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            To the maximum extent permitted by law, Firefly Spark and its
            affiliates will not be liable for any indirect, incidental, special,
            consequential, punitive, or exemplary damages, or for lost profits,
            revenue, data, goodwill, or business interruption, even if advised of
            the possibility.
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            Our total aggregate liability for all claims relating to the service
            is limited to the greater of CAD 100 or the amounts you paid us (if
            any) in the 12 months before the claim. Nothing here excludes
            liability that cannot be excluded under Ontario or Canadian law.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-indemnity">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            15) Indemnity
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            You agree to defend, indemnify, and hold harmless Firefly Spark and
            our officers, directors, employees, and agents from claims, damages,
            losses, liabilities, costs, and expenses (including reasonable legal
            fees) arising from or related to your content, your use of the
            service, your breach of these Terms or law, or your conduct at or in
            connection with a Spark.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-app-store">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            16) App Store specific terms (Apple 10-point EULA content)
          </h1>
          <ul className="list-disc ml-6 mt-10">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Acknowledgement.&nbsp;</span>These
              Terms are between you and Firefly Spark only, not with Apple.
              Firefly Spark is solely responsible for the App and the content in
              it.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Scope of license.&nbsp;</span>Your
              license to use the App is a non-transferable license to use the App
              on any Apple-branded product that you own or control and as
              permitted by the usage rules in the Apple Media Services Terms and
              Conditions. The App may be accessed by other accounts associated
              with you via Family Sharing or volume purchasing.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Maintenance and support.&nbsp;
              </span>
              Firefly Spark is solely responsible for providing any maintenance
              and support for the App. Apple has no obligation to provide
              maintenance or support.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Warranty.&nbsp;</span>If the App
              does not conform to any applicable warranty, you may notify Apple
              and Apple will refund the purchase price for the App to you if
              there was one. To the maximum extent permitted by law, Apple will
              have no other warranty obligation. Any other claims, losses,
              liabilities, damages, costs, or expenses due to a failure to
              conform to any warranty are the responsibility of Firefly Spark.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Product claims.&nbsp;</span>Firefly
              Spark, not Apple, is responsible for addressing any claims from you
              or a third party relating to the App or to your possession and use
              of the App, including product liability claims, claims that the App
              fails to conform to law, and claims arising under consumer
              protection, privacy, or similar legislation.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Intellectual property.&nbsp;
              </span>
              If a third party claims that the App or your possession and use of
              the App infringes that third party&apos;s intellectual property
              rights, Firefly Spark is solely responsible for the investigation,
              defense, settlement, and discharge of the claim.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Legal compliance.&nbsp;</span>You
              represent and warrant that you are not located in a country that is
              subject to a U.S. Government embargo or designated as a
              &quot;terrorist supporting&quot; country and that you are not
              listed on any U.S. Government list of prohibited or restricted
              parties.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Developer name and address.&nbsp;
              </span>
              Firefly Spark is provided by Gallop Innovations Inc., 24 Borrows
              Street, Thornhill, Ontario, L4J 2S4, Canada. Email:{" "}
              <ContactEmail />.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Third-party terms.&nbsp;</span>You
              must comply with applicable third-party terms of agreement when
              using the App.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Third-party beneficiary.&nbsp;
              </span>
              You and Firefly Spark acknowledge and agree that Apple and
              Apple&rsquo;s subsidiaries are third-party beneficiaries of these
              Terms and that, upon your acceptance of the Terms, Apple will have
              the right to enforce the Terms against you.
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section
          className="mt-20"
          aria-label="terms-of-service-third-party-services"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            17) Third-party services
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We rely on third parties such as maps, payments, analytics, and
            verification. Their terms and privacy policies apply to their
            services. We are not responsible for them.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-changes">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            18) Changes, suspension, termination, and survival
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            We may modify the service or these Terms prospectively by posting
            in-app. If you continue using the service after changes take effect,
            you agree to the updated Terms. We may suspend or terminate accounts
            to protect users, comply with law, or for misuse.
          </p>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
            Sections that by their nature should survive termination will
            survive. This includes the parts on subscriptions and paid access,
            Lumins and deposits, attendance and penalties, verification and
            privacy, user content, assumption of risk and release, disclaimers,
            limitation of liability, indemnity, App Store terms, disputes and
            governing law, and miscellaneous.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-disputes">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            19) Disputes, governing law, venue, and time limits
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            These Terms are governed by the laws of Ontario and the federal laws
            of Canada that apply in Ontario, without regard to conflict rules.
          </p>
          <ul className="list-disc ml-6">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              You agree to the exclusive jurisdiction of the courts of Ontario
              (Toronto) for disputes that are not resolved informally.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              If both parties agree in writing, a dispute may be referred to
              binding arbitration under the Arbitration Act, 1991 (Ontario) in
              Toronto before a single arbitrator, in English.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              To the extent permitted by law, any claim must be filed within 1
              year after it arose or be permanently barred.
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-communications">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            20) Electronic communications and CASL
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            You consent to receive electronic communications related to your
            account and the service. We send promotional messages only with
            consent or as permitted by CASL. You can manage preferences in-app or
            by contacting <ContactEmail />.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-accessibility">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            21) Accessibility and safety resources
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            If you require accessibility accommodations under the AODA, contact{" "}
            <ContactEmail />. Use in-app tools to report safety concerns and
            block users.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section
          className="mt-20"
          aria-label="terms-of-service-notice-takedown"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            22) Notice and takedown; rights reporting
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            For IP or legal notices, email <ContactEmail /> with enough detail to
            identify the content and your rights. We may remove or disable
            content at our discretion.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section className="mt-20" aria-label="terms-of-service-miscellaneous">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            23) Miscellaneous
          </h1>
          <p className="text-base md:text-lg text-gray-200 py-2 leading-relaxed mt-10">
            These Terms, together with the Privacy Policy and posted policies
            referenced here, are the entire agreement between you and us. If a
            provision is unenforceable, the rest remains in effect and an
            enforceable term will be substituted to approximate the original
            intent. You may not assign these Terms. We may assign in connection
            with a merger, acquisition, or sale of assets. Failure to enforce a
            provision is not a waiver. The parties have expressly requested and
            required that these Terms and all related documents be drawn up in
            English.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed my-10 border-b-1 border-gray-400"></p>
        </section>

        <section
          className="mt-20 mb-40"
          aria-label="terms-of-service-schedule-a"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            Schedule A — Product Policy (deposits, attendance, and labeling)
          </h1>
          <ul className="list-disc ml-6 mt-10">
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Deposit to start or join:&nbsp;
              </span>
              10 Lumins
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Arrival confirmation:&nbsp;
              </span>
              auto by device location at or near the venue. If location is off,
              open the app at the venue so we can confirm.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Late and cancellation outcomes:
              </span>
              <ul className="list-disc ml-6">
                <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
                  Cancel after join → minus 10
                </li>
                <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
                  Arrive 0 to 15 min late → keep 10
                </li>
                <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
                  Arrive 15 to 30 min late → minus 5
                </li>
                <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
                  Arrive 30+ min late or no arrival → minus 10
                </li>
              </ul>
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Group change:&nbsp;</span>if below
              your original minimum but still 3 or more, choose Stay in or Leave
              free. No reply by the stated time may auto-remove you without
              penalty.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">Duo confirm:&nbsp;</span>if exactly
              2 remain before start, both must confirm Go 1-on-1 within the
              stated time. Otherwise we cancel and refund.
            </li>
            <li className="text-base md:text-lg text-gray-200 py-2 leading-relaxed">
              <span className="font-semibold">
                Labeling and attribution:&nbsp;
              </span>
              Sparks may appear to be started by users or by Firefly Spark.
              Firefly Spark may also post Sparks from accounts it operates with
              or without Firefly Spark attribution. Only Sparks expressly labeled
              Official Firefly Spark Event are organized by Firefly Spark and
              require acceptance of Official Event Terms and Waiver. All other
              Sparks are curated listings and not organized or hosted by Firefly
              Spark.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
