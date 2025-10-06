import FireflySparkLogo from "@/components/FireflySparkLogo";

function ContactEmail() {
    return <a
        href="mailto:hello@fireflyspark.io"
        className="text-green-500"
    >
        hello@fireflyspark.io
    </a>
}

export default function AboutPage() {
    return (
        <main className="flex justify-center p-5 md:p-10 max-w-[1300px] " >
            <div className="flex-col md:flex-row items-start gap-10 md:gap-[120px] md:m-[60px] lg:m-[80px] xl:m-[108px]">
                <div className="w-full flex items-center justify-between">
                    <FireflySparkLogo
                        className=" "
                        textClass="sm:hidden"
                        iconClass="w-[50px] h-[50px] md:w-[140px] md:h-[140px] -ml-1 md:-ml-4"
                    />
                    <div className="sm:hidden">
                        menu
                    </div>
                </div>

                <section className="mt-5 md:mt-20">
                    <h1 className="text-5xl font-bold text-gray-50 ">
                        What is Firefly Spark?
                    </h1>
                    <p className="text-lg text-gray-200 font-semibold mt-10">
                        A member-only, privacy-first for spontaneous small meetups.
                    </p>

                    <p className="text-lg text-gray-200 mt-10">
                        No feed. No swiping. No DMs.
                    </p>
                    <p className="text-lg text-gray-200">
                        No public profiles.
                    </p>
                    <p className="text-lg text-gray-200">
                        Small groups. Public places.
                    </p>
                    <p className="text-lg text-gray-200">
                        Verified people.
                    </p>

                    <p className="text-lg text-gray-200 mt-10">
                        Plans that start soon.
                    </p>
                    <p className="text-lg text-gray-200">
                        People who show up.
                    </p>

                    <p className="text-lg text-gray-200 mt-10">
                        <span className="font-semibold">Firefly Spark. </span> Spontaneity you can count on.
                    </p>
                </section>
            </div>
        </main>
    );
}
