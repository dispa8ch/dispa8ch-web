import type { Metadata } from "next";
import "../../globals.css";

/**
 * @todo This metadata should be dynamic and set when a user posts a new blog
 */
export const metadata: Metadata = {
  title: "Welcome to Dispa8ch",
  description:
    "Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization.",
};

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={"w-full min-h-screen relative"}>
      {children}
    </section>
  );
}
