import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Dispa8ch",
  description:
    "Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization.",
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={"w-fit h-fit"}>{children}</section>
  );
}
