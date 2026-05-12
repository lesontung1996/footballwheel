import Link from "next/link";

export default function Footer() {
  return (
    <footer className="2xl:container w-full mx-auto px-4">
      <div className="mt-10 border-t py-4 border-white/10">
        <div className="flex flex-wrap gap-8 md:gap-12 xl:gap-40">
          <div>
            <Link href="/" className="text-h4">
              FootballWheel.com
            </Link>
            <p className="text-sm">
              Random football team generator & Friendly football league
              generator
            </p>
          </div>
          <nav aria-label="Links" className="flex flex-col text-sm space-y-2">
            <p className="uppercase font-semibold">Links</p>
            <Link href="/" className="">
              Football wheel
            </Link>
            <Link href="/league" className="">
              Football league
            </Link>
          </nav>
        </div>
        <div className="space-x-4 text-sm mt-4 pt-4 border-t border-white/5">
          <span>
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/tobyle96/"
              className="link-underline"
            >
              Tung Le Son
            </a>
          </span>
          <span aria-hidden="true" className="opacity-50">
            ·
          </span>
          <span>
            <a
              href="https://buymeacoffee.com/tungle"
              className="link-underline"
            >
              Buy me a coffee ☕
            </a>
          </span>
          <span aria-hidden="true" className="opacity-50">
            ·
          </span>
          <span>
            <a href="mailto:lesontung1996@gmail.com" className="link-underline">
              Contact me
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
