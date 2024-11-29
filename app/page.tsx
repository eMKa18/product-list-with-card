import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <footer className="text-sm text-center">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="text-[color:hsl(228,45%,44%)]"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="#" className="text-[color:hsl(228,45%,44%)]">
          eMKa18
        </a>
        .
      </footer>
    </div>
  );
}
