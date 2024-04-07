import { Header } from "@/components/dispa8ch-ui";
import type { Metadata } from "next";
import Footer from "../_components/Footer";
import "../globals.css";

export const metadata: Metadata = {
  title: "Blog | Dispa8ch",
  description:
    "Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={"w-full h-screen relative "}>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
