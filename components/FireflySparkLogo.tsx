import Link from "next/link";

import FireflySparkIcon from "@/components/icons/FireflySparkIcon";

type FireflySparkLogoProps = {
  className?: string;
  iconClass?: string;
  fontSize?: string;
  // textClass?: string;
  spacing?: string;
};

export default function FireflySparkLogo({
  className,
  iconClass,
  fontSize = "text-xl",
  // textClass = ''
}: FireflySparkLogoProps) {
  return (
    <Link href={"/"}>
      <span
        className={`inline-flex items-center align-middle ${fontSize} ${className ?? ""}`}
      >
        <FireflySparkIcon className={iconClass ?? "w-[1em] h-[1em]"} />
        {/* <span className={`${textClass}`}>
                    Firefly Spark
                </span> */}
      </span>
    </Link>
  );
}
