import DessertList from "./components/DessertList";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-primary)]">
      <main className="flex flex-col gap-8 row-start-2 items-start h-full">
        <div className="title font-[family-name:var(--font-primary)] font-bold text-4xl mb-2">
          Desserts
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <DessertList></DessertList>
          <div className="cart">Cart</div>
        </div>
      </main>
      <footer className="text-xs text-center bottom-0 justify-self-end">
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
