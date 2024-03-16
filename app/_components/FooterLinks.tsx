import { entries, lowercase } from "@/lib";
import Link from "next/link";

type LinkSections = {
  [index in "Product" | "Company" | "Contact Us"]: Array<{
    name: string;
    link: string;
    external?: true;
  }>;
};

const linkSections: LinkSections = {
  Product: [
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "FAQ",
      link: "/#faq",
    },
  ],
  Company: [
    {
      name: "Terms of Service",
      link: "/terms-of-service",
    },
    {
      name: "Privacy policy",
      link: "/privacy-policy",
    },
  ],
  "Contact Us": [
    {
      name: "support@dispa8ch.com",
      link: "mailto:support@dispa8ch.com",
      external: true,
    },
    {
      name: "Call us +234 709 867 7689",
      link: "https://wa.me/+2347098677689",
      external: true,
    },
  ],
};

const LinkSection = <T extends Helpers.Keyof<typeof linkSections>>({
  name,
  links,
}: {
  name: T;
  links: (typeof linkSections)[T];
}) => {
  return (
    <div className='fit text-base font-Inter column gap-6'>
      <h1 className='font-Inter_Bold'>{name}</h1>
      {links.map(({ link, name, external }, i) => {
        const Comp = external ? "a" : Link;
        const targetProps = external ? { target: "_blank" } : {}
        return (
          <Comp
            key={i}
            {...targetProps}
            href={lowercase(link)}
            className="fit transition-all duration-300 ease-linear link-underline after:scale-0 after:transition-all after:duration-300 after:ease-linear hover:after:scale-100  hover:text-white dark:after:bg-white dark:hover:text-white/60  "
            >
            <p>{name}</p>
          </Comp>
        );
      })}
    </div>
  );
};

const FooterLinks = () => {
  return (
    <section className='w-full h-fit flex justify-between items-start flex-wrap gap-6 lg:w-2/5 lg:h-full dark:text-white '>
      {entries(linkSections).map(([name, links], i) => (
        <LinkSection
          name={name}
          links={links}
          key={i}
        />
      ))}
    </section>
  );
};

export default FooterLinks;