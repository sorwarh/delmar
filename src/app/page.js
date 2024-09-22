import Image from "next/image";
import Welcome from "../components/welcome/welcome";
export default function Home() {
  return (
    <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start min-h-screen">
      <Welcome />
    </section>
  );
}
