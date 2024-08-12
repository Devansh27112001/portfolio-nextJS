import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 text-white flex justify-center items-center flex-col mx-auto
    overflow-hidden sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
