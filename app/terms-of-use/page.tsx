import Header from "@/components/Header";
import ScrollTop from "@/components/ScrollTop";
import Link from "next/link";

function ContactEmail() {
    return <a
        href="mailto:hello@fireflyspark.io"
        className="text-green-500"
    >
        hello@fireflyspark.io
    </a>
}

function PP() {
    return <Link
        href="/private-policy"
        className="text-green-500"
    >
        Private Policy
    </Link>
}

export default function PPPage() {
    return (
        <main
            className="pb-4 px-5 md:p-10 max-w-[1450px] mx-auto" >
            <div className="flex-col md:flex-row items-start lg:m-[80px] xl:m-[108px]">
                <ScrollTop />
                <Header />

                <section className="mt-12 md:mt-6" aria-label="terms-of-service">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-50">
                        Terms of Service
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 py-1 mt-10">
                        <span className="font-semibold">
                            Effective date:&nbsp;
                        </span>
                        October 7, 2025
                    </p>
                    <p className="text-base md:text-lg text-gray-200 py-1">
                        <span className="font-semibold">
                            Company:&nbsp;
                        </span>
                        <span className="font-semibold">Gallop Innovations Inc. </span>(doing business as <span className="font-semibold">Firefly Spark</span>) (<span className="font-semibold">"Firefly Spark," "we,"
                            "us," "our"</span>)
                    </p>
                    <p className="text-base md:text-lg text-gray-200 py-1">
                        <span className="font-semibold">
                            Address:&nbsp;
                        </span>
                        24 Borrows Street, Thornhill, Ontario, L4J 2S4
                    </p>
                    <p className="text-base md:text-lg text-gray-200 py-1">
                        <span className="font-semibold">
                            Contact (support & legal):&nbsp;
                        </span>
                        <ContactEmail />
                    </p>

                    <p className="text-base md:text-lg text-gray-200 my-10 pb-10 border-b-1 border-gray-400">
                        By creating an account, using the app, or starting/joining a Spark (defined below), you agree to
                        these Terms and to our <PP />&nbsp;
                        If you do not agree, do not use Firefly Spark.
                    </p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-definitions">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Key definitions
                    </h1>
                    <ul className="list-disc ml-6">
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Spark:&nbsp;
                            </span>
                            a user-created plan for an in-person activity at a time/place chosen by users
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Hold / Hold my spot: &nbsp;
                            </span>
                            a conditional reservation that counts toward a Spark&apos;s minimum;
                            you are not in the roster until the minimum is met.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Auto-join: &nbsp;
                            </span>
                            when a Hold converts to a confirmed seat because the Spark meets the
                            minimum participants.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Lumins: &nbsp;
                            </span>
                            in-app points used as deposits; not money, have no cash value, and are not
                            redeemable for cash.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Platform-Seeded Spark: &nbsp;
                            </span>
                            a Spark <span className="font-semibold">posted by Firefly Spark</span>, including via accounts we
                            operate, <span className="font-semibold">with or without Firefly Spark attribution/branding</span>, to stimulate supply or
                            showcase ideas; it is a <span className="font-semibold">curated listing only</span> and <span className="font-semibold">not</span> organized or supervised by Firefly
                            Spark.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Official Firefly Spark Event: &nbsp;
                            </span>
                            a plan  <span className="font-semibold">explicitly labeled in-app</span> as “Official Firefly Spark
                            Event,” presented with separate  <span className="font-semibold">Official Event Terms & Waiver</span> at join. Unless a Spark
                            is labeled this way, it is not an Official Firefly Spark Event.
                        </li>
                    </ul>
                    <p className="text-base md:text-lg text-gray-200 py-1 mt-10">
                        <span className="font-semibold">
                            Important: &nbsp;
                        </span>
                        Whether or not a Spark appears to be started by Firefly Spark or by an
                        account we operate, <span className="font-semibold">if it is not labeled “Official Firefly Spark Event,” it is a
                            User-Started or Platform-Seeded Spark and is not organized or hosted by
                            Firefly Spark.</span>
                    </p>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-who-may-use">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Who may use Firefly Spark
                    </h1>
                    <ul className="list-disc ml-6">
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Age: &nbsp;
                            </span>
                            You must be <span className="font-semibold">18+</span> to use Firefly Spark. Activities marked <span className="font-semibold">19+</span> require that you are 19
                            or older.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Territory: &nbsp;
                            </span>
                            We currently operate in Ontario (including the GTA/Toronto).
                        </li><li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Account: &nbsp;
                            </span>
                            Provide accurate information; keep credentials secure; you are responsible for
                            all activity under your account. We may refuse, suspend, or terminate accounts to
                            protect users, comply with law, or safeguard the service.
                        </li>
                    </ul>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-what-is-firefly-spark">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        What Firefly Spark is (and is not)
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 py-1 mt-10">
                        <span className="font-semibold"> Firefly Spark is a platform.</span> We help adults discover and coordinate small, same-day or
                        near-term <span className="font-semibold">user-organized</span> activities. We <span className="font-semibold">do not</span> plan, organize, host, supervise, or control
                        Sparks (User-Started or Platform-Seeded), venues, or transportation; we <span className="font-semibold">do not</span> guarantee that
                        Sparks will occur, fill, or meet expectations; and we do not provide background checks, security,
                        or insurance. <span className="font-semibold">You are solely responsible for your decisions and personal safety.</span>
                    </p>
                    <p className="text-base md:text-lg text-gray-200 py-1 mt-10">
                        If we ever run an <span className="font-semibold">Official Firefly Spark Event</span>, it will be <span className="font-semibold">clearly labeled</span> in-app and require
                        acceptance of <span className="font-semibold">Official Event Terms & Waiver</span> at join. If you do not see that label and waiver,
                        the Spark is <span className="font-semibold">not</span> organized by Firefly Spark.
                    </p>
                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-privacy">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Verification, privacy & location
                    </h1>
                    <ul className="list-disc ml-6">
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Selfie/ID verification:
                            </span>&nbsp;
                            We may require a quick selfie check and, for certain features, an
                            ID check provided by <span className="font-semibold">Biometric Vision</span> to reduce fake accounts and fraud. You consent
                            to our and our vendor&apos;s processing of images/biometric identifiers for verification, fraud
                            prevention, and safety. See our <PP /> for details and retention.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Private by default; reveal window:
                            </span>&nbsp;
                            Your name and photo are visible <span className="font-semibold">only</span> to members
                            of your Spark beginning about <span className="font-semibold">1 hour before</span> start; otherwise they are not visible to
                            other users.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Location:
                            </span>&nbsp;
                            We use device location to (a) show nearby Sparks and (b) <span className="font-semibold">auto-confirm arrival at/near the venue around start time</span>
                            . We do <span className="font-semibold">not</span> show exact live location to
                            other users. If location is off, open the app at the venue so attendance can be confirmed.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Emergencies:
                            </span>&nbsp;
                            Firefly Spark is <span className="font-semibold">not</span> an emergency service. In an emergency, call <span className="font-semibold">911</span>.
                        </li>
                    </ul>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-sparks">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Creating, holding, joining & changing Sparks
                    </h1>
                    <ul className="list-disc ml-6">
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Hold my spot:
                            </span>&nbsp;
                            Tapping <span className="font-semibold">Hold</span> conditionally reserves a seat and counts toward the
                            minimum. You are <span className="font-semibold">not</span> in the roster until the minimum is met (<span className="font-semibold">Auto-join</span>). You may
                            <span className="font-semibold">release</span> a Hold any time <span className="font-semibold">before</span> Auto-join.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Auto-join; leaving after join:
                            </span>&nbsp;
                            When minimum is met, you&apos;re <span className="font-semibold">in</span>. If you leave after joining,
                            penalties apply (§7).
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Group change (below your minimum):
                            </span>&nbsp;
                            If a Spark drops below your original minimum
                            but still has <span className="font-semibold">≥3 people</span> , we may prompt you to <span className="font-semibold">Stay</span> in at the new size or <span className="font-semibold">Leave free</span>. If
                            you don&apos;t respond by the stated time, we may auto-remove you without penalty.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Duo confirm (exactly 2):
                            </span>&nbsp;
                            If only two people remain before start, both must confirm <span className="font-semibold">Go
                                1-on-1?</span> within the stated time; otherwise the Spark cancels and deposits are refunded.
                        </li>
                    </ul>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-lumins">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Lumins (deposits) & purchases
                    </h1>
                    <ul className="list-disc ml-6">
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Nature of Lumins:
                            </span>&nbsp;
                            Lumins are in-app points used <span className="font-semibold">as deposits</span> to promote reliability.
                            They: (i) are <span className="font-semibold">not</span> legal tender; (ii) have <span className="font-semibold">no cash value</span>; (iii) are <span className="font-semibold">not</span> redeemable or
                            refundable for cash; (iv) are <span className="font-semibold">licensed</span> to you, not sold; and (v) may be <span className="font-semibold">modified, limited,
                                or discontinued</span> prospectively.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Deposit:
                            </span>&nbsp;
                            Starting or joining a Spark requires a <span className="font-semibold">10 Lumin</span> deposit.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Purchases:
                            </span>&nbsp;
                            If you run out, you may <span className="font-semibold">purchase</span> Lumins via Apple/Google in-app
                            purchase. <span className="font-semibold">All Lumin purchases are final</span> except where platform policy or applicable law
                            requires a refund. Taxes may apply. We may change prices prospectively.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                No transfer/resale:
                            </span>&nbsp;
                            You may not sell, barter, or transfer Lumins (except within features
                            we explicitly enable).
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Account closure:
                            </span>&nbsp;
                            On account termination (by you or us), unused Lumins are <span className="font-semibold">forfeited</span>
                            to the extent permitted by law.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Tickets/fees:
                            </span>&nbsp;
                            For <span className="font-semibold">Platform-Seeded Sparks</span> (including any <span className="font-semibold">unattributed house-posted
                            </span> listings), each participant is responsible for their <span className="font-semibold">own tickets/fees</span> with any
                            venue/provider. Lumins are <span className="font-semibold">not</span> tickets and do <span className="font-semibold">not</span> purchase goods or services from
                            Firefly Spark
                        </li>
                    </ul>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-attendance">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Attendance, late & cancellations (deposits/penalties)
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 py-1 mt-10">
                        Attendance is auto-confirmed by device location near the venue at/after start. If location is
                        disabled, open the app at the venue so we can confirm.
                    </p>
                    <ul className="list-disc ml-6">
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Cancel after you’ve joined (any time):
                            </span>&nbsp;
                            <span className="font-semibold">−10 Lumins</span> (deposit used).
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Arrive 0–15 minutes after start:
                            </span>&nbsp;
                            <span className="font-semibold">No penalty</span>  (keep 10)
                        </li> <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Arrive &gt;15–30 minutes after start:
                            </span>&nbsp;
                            <span className="font-semibold"> −5 Lumins</span> .
                        </li> <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Arrive &gt;30 minutes after start or never arrive:
                            </span>&nbsp;
                            <span className="font-semibold">−10 Lumins</span> (treated as no-show).
                        </li>
                    </ul>

                    <p className="text-base md:text-lg text-gray-200 mt-10">
                        We may adjust deposit amounts and penalties prospectively with in-app notice. For
                        Platform-Seeded listings (including house-posted), we do not guarantee venue capacity, entry,
                        or availability; venue/provider rules apply.
                    </p>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-safety-rules">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Conduct & safety rules
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 py-1 mt-10">
                        You agree to:
                    </p>

                    <ul className="list-disc ml-6">
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Be lawful and respectful:
                            </span>&nbsp;
                            no harassment, hate, threats, stalking, doxxing, sexual
                            exploitation, fraud, or illegal acts
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Follow venue rules & law
                            </span>&nbsp;
                            (including <span className="font-semibold">19+</span> alcohol rules).
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                No weapons, illegal drugs, or dangerous conduct.
                            </span>&nbsp;
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Respect privacy:
                            </span>&nbsp;
                            do not record or post others&apos; likenesses without consent.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Use reports:
                            </span>&nbsp;
                            report issues via in-app tools or email <ContactEmail />.
                        </li>
                    </ul>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-license">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Your content; license; feedback
                    </h1>

                    <ul className="list-disc ml-6">
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Your rights:
                            </span>&nbsp;
                            You retain rights in content you submit (e.g., Spark titles/notes, messages,
                            photos).
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                License to Firefly Spark:
                            </span>&nbsp;
                            You grant Firefly Spark a worldwide, non-exclusive,
                            royalty-free license to host, store, reproduce, adapt, display, and use your content to
                            operate, secure, and improve the service and to promote the service. To the extent
                            permitted by law, you waive moral-rights enforcement against us for these purposes
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                No infringement:
                            </span>&nbsp;
                            You represent you have rights to your content and that it does not
                            infringe others&apos; rights or law.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Feedback:
                            </span>&nbsp;
                            If you provide feedback, you grant us a perpetual, irrevocable, royalty-free
                            license to use it without restriction or attribution.
                        </li>
                    </ul>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-host">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        No organizer/host; no agency or special relationship
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 py-1">
                        For <span className="font-semibold">User-Started</span>, <span className="font-semibold">Platform-Seeded</span>, and <span className="font-semibold">unattributed house-posted</span> Sparks, Firefly Spark
                        acts only as a platform provider and curator; we are not an organizer or host, and we owe <span className="font-semibold">no
                            duty to supervise</span> participants, venues, or third parties. Nothing in these Terms creates an
                        agency, partnership, joint venture, employment, fiduciary, or special relationship between you
                        and Firefly Spark. <span className="font-semibold">The fact that a Spark was posted by an account we operate—whether or
                            not it displays Firefly Spark branding—does not make it an Official Firefly Spark Event or
                            create a duty to supervise</span>.
                    </p>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-risks">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Assumption of risk & release
                    </h1>

                    <ul className="list-disc ml-6">
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Inherent risks:
                            </span>&nbsp;
                            Real-world activities involve risks (travel, weather, venue conditions,
                            illness, crime, actions/omissions of others). <span className="font-semibold">You knowingly and voluntarily assume all
                                risks</span> related to attending or hosting a Spark.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Release:
                            </span>&nbsp;
                            To the <span className="font-semibold">maximum extent permitted by law</span>, you <span className="font-semibold">release and discharge</span>
                            Firefly Spark (Gallop Innovations Inc.) and our officers, directors, employees, and agents
                            from <span className="font-semibold">claims, demands, losses, damages, or expenses</span> (including for <span className="font-semibold">negligence</span>)
                            arising out of or related to (a) interactions with users, (b) attendance at Sparks (including
                            Platform-Seeded or house-posted listings), or (c) third-party services or venues, <span className="font-semibold">except</span>
                            to the extent caused by our wilful misconduct.
                        </li>
                    </ul>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-disclaimers">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Disclaimers (warranties)
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 py-1">
                        To the <span className="font-semibold">maximum extent permitted by law,</span> Firefly Spark is provided <span className="font-semibold">“as is”</span> and <span className="font-semibold">“as
                            available.”</span> We <span className="font-semibold">disclaim all warranties</span>, express or implied, including merchantability, fitness
                        for a particular purpose, quiet enjoyment, and non-infringement. We do not warrant that Sparks
                        will fill, occur, or meet expectations, or that the service will be uninterrupted, timely, secure, or
                        error-free. Map/location data may be inaccurate or incomplete.
                    </p>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-liability">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Limitation of liability
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 py-1">
                        To the <span className="font-semibold">maximum extent permitted by law,</span> Firefly Spark and its affiliates will <span className="font-semibold">not be liable</span> for
                        any <span className="font-semibold">indirect, incidental, special, consequential, punitive, or exemplary damages, or for
                            lost profits, revenue, data, goodwill, or business interruption</span>, even if advised of the
                        possibility.</p>

                    <p className="text-base md:text-lg text-gray-200 py-1">

                        Our <span className="font-semibold">total aggregate liability</span> for all claims relating to the service is limited to the <span className="font-semibold">greater of
                            CAD $100 or the amounts you paid us (if any) in the 12 months before the claim</span>. Nothing
                        here excludes liability that cannot be excluded under Ontario/Canadian law.
                    </p>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-indemnity">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Indemnity
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 py-1">
                        You agree to <span className="font-semibold">defend, indemnify, and hold harmless</span> Firefly Spark (and our officers, directors,
                        employees, and agents) from claims, damages, losses, liabilities, costs, and expenses
                        (including reasonable legal fees) arising from or related to: (a) your content; (b) your use of the
                        service; (c) your breach of these Terms or law; or (d) your conduct at or in connection with a
                        Spark.
                    </p>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-changes">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Changes; suspension; termination; survival
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 py-1">
                        We may modify the service or these Terms <span className="font-semibold">prospectively</span> by posting in-app (the effective date
                        will update). If you continue using the service after changes take effect, you agree to the
                        updated Terms. We may suspend or terminate accounts to protect users, comply with law, or for
                        misuse.
                    </p>

                    <p className="text-base md:text-lg text-gray-200 py-1">
                        <span className="font-semibold">Survival:</span> §§6–7 and 9–21 survive termination
                    </p>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-third-party-services">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Third-party services & app stores
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 py-1">
                        We rely on third parties (e.g., maps, payments, analytics, verification <span className="font-semibold">Biometric Vision</span>). Their
                        terms/privacy policies apply to their services; we are not responsible for them.
                        This agreement is between you and Gallop Innovations Inc., not Apple or Google.
                        Apple/Google are not responsible for the service and have no duty to provide support. You must
                        comply with their terms. Apple and Google are third-party beneficiaries of this clause.
                    </p>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-disputes">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Disputes; governing law; venue; time limits
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 py-1">
                        These Terms are governed by the laws of <span className="font-semibold">Ontario</span> and the federal laws of <span className="font-semibold">Canada</span> applicable
                        therein, without regard to conflict rules.
                    </p>

                    <ul className="list-disc ml-6">
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Venue:&nbsp;
                            </span>
                            You agree to the <span className="font-semibold">exclusive jurisdiction</span> of the courts of Ontario (Toronto) for
                            disputes not resolved informally.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Optional arbitration:&nbsp;
                            </span>
                            If both parties agree in writing, a dispute may be referred to
                            binding arbitration under the<span className="font-semibold">Arbitration Act, 1991 (Ontario)</span>  in Toronto before a single
                            arbitrator, in English.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Limitation period:&nbsp;
                            </span>
                            To the extent permitted by law, any claim must be filed within <span className="font-semibold">1 year</span>
                            after it arose or be permanently barred.
                        </li>
                    </ul>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-casl">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Electronic communications; CASL
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 py-1">
                        You consent to receive electronic communications related to your account and the service (e.g.,
                        invites, Auto-join, group changes, attendance outcomes). We send promotional messages only
                        with consent or as permitted by <span className="font-semibold">CASL</span>; you can manage preferences in-app or by contacting <ContactEmail />
                    </p>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-accessibility">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Accessibility & safety resources
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 py-1">
                        If you require accessibility accommodations under the <span className="font-semibold">AODA</span>, contact <ContactEmail />.
                        Use in-app tools to report safety concerns and block users.
                    </p>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-rights-reporting">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Notice & takedown; rights reporting
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 py-1">
                        For IP or legal notices, email <ContactEmail /> with enough detail to identify the content
                        and your rights. We follow Canada&apos;s “notice-and-notice” approach and may remove or disable
                        content at our discretion.
                    </p>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20" aria-label="terms-of-service-miscellaneous">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Miscellaneous
                    </h1>

                    <ul className="list-disc ml-6">
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Entire agreement: &nbsp;
                            </span>
                            These Terms (plus the Privacy Policy and posted policies referenced
                            here) are the entire agreement.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Severability: &nbsp;
                            </span>
                            If a provision is unenforceable, the rest remains in effect; an enforceable
                            term will be substituted to approximate the original intent.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Assignment: &nbsp;
                            </span>
                            You may not assign these Terms. We may assign in connection with a
                            merger, acquisition, or sale of assets.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                No waiver: &nbsp;
                            </span>
                            Failure to enforce a provision is not a waiver.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Language: &nbsp;
                            </span>
                            The parties have expressly requested and required that these Terms and all
                            related documents be drawn up in English.
                        </li>
                    </ul>

                    <p className="text-base md:text-lg text-gray-200 my-10 border-b-1 border-gray-400"></p>
                </section>

                <section className="mt-20 mb-40" aria-label="terms-of-service-schedule-a">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-50 ">
                        Schedule A — Product Policy (deposits, attendance &
                        labeling)
                    </h1>

                    <ul className="list-disc ml-6">
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Deposit to start/join: &nbsp;
                            </span>
                            <span className="font-semibold">
                                10 Lumins
                            </span>
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Arrival confirmation: &nbsp;
                            </span>
                            Auto by device location at/near the venue. If location is off, open
                            the app at the venue so we can confirm.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Late & cancellation outcomes: &nbsp;
                            </span>
                            <ul className="list-disc ml-6">
                                <li className="text-base md:text-lg text-gray-200 py-1">
                                    Cancel after join →
                                    <span className="font-semibold">
                                        &nbsp;-10
                                    </span>
                                </li>
                                <li className="text-base md:text-lg text-gray-200 py-1">
                                    Arrive 15–30 min late →
                                    <span className="font-semibold">
                                        &nbsp;0
                                    </span>
                                </li>
                                <li className="text-base md:text-lg text-gray-200 py-1">
                                    Arrive 0–15 min late →
                                    <span className="font-semibold">
                                        &nbsp;-5
                                    </span>
                                </li>
                                <li className="text-base md:text-lg text-gray-200 py-1">
                                    Arrive 30+ min late or no arrival →
                                    <span className="font-semibold">
                                        &nbsp;-10
                                    </span>
                                </li>
                            </ul>
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Group change:: &nbsp;
                            </span>
                            If below your original minimum but still <span className="font-semibold">≥3</span>, choose <span className="font-semibold">Stay</span> in or <span className="font-semibold">Leave free</span>
                            (no reply by the stated time may auto-remove you without penalty)
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Duo confirm: &nbsp;
                            </span>
                            If exactly <span className="font-semibold">2</span> remain before start, both must confirm <span className="font-semibold">Go 1-on-1?</span> within the
                            stated time; otherwise we cancel and refund.
                        </li>
                        <li className="text-base md:text-lg text-gray-200 py-1">
                            <span className="font-semibold">
                                Labeling & attribution: &nbsp;
                            </span>
                            Sparks may appear to be started by users or by Firefly Spark.
                            Firefly Spark may also post Sparks from accounts it operates <span className="font-semibold">with or without Firefly
                                Spark attribution. Only</span> Sparks expressly labeled <span className="font-semibold">Official Firefly Spark Event</span> are
                            organized by Firefly Spark and require acceptance of <span className="font-semibold">Official Event Terms & Waiver</span>.
                            All other Sparks are curated listings and not organized or hosted by Firefly Spark.
                        </li>
                    </ul>

                </section>
            </div>
        </main >
    );
}
