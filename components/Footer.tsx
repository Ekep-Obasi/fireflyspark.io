import Link from "next/link"

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full flex items-center justify-between border-t border-gray-500  text-gray-300 text-sm p-4"
            style={{ backgroundColor: "var(--background)" }}>
            <p className="flex-1 text-left truncate">
                Copyright 2025 Firefly Spark
            </p>
            <Link href="#">
                <p className="flex-1 text-center truncate">
                    Private Policy | Terms of Use
                </p>
            </Link>
            <p className="flex-1 text-right truncate">
                Icons
            </p>
        </footer>
    )
}
