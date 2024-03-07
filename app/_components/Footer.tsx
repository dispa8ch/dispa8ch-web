import { CopyRightIcon, SocialMedia } from "@/components/dispa8ch-icons";
import { entries, lowercase } from "@/lib";
import { Dispa8chLogo } from "@/public/icons";
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
            className="fit after:block after:w-full after:h-0.5 after:scale-0 after:bg-white/60 after:transition-all after:duration-300 after:ease-linear hover:after:scale-100 transition-all duration-300 ease-linear hover:text-white "
            >
            <p>{name}</p>
          </Comp>
        );
      })}
    </div>
  );
};

const Links = () => {
  return (
    <section className='w-full h-fit flex justify-between items-start flex-wrap gap-6 lg:w-2/5 lg:h-full'>
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

/**
 * @todo get the original links for the social media icons;
 * @todo fix the Dispa8ch logo by exporting a .png image instead of an svg
 */
const Footer = () => {
  const {
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
    YoutubeIcon,
  } = SocialMedia;
  const socialMediaLinks = [
    TwitterIcon,
    FacebookIcon,
    YoutubeIcon,
    InstagramIcon,
    LinkedInIcon,
  ] as const;

  return (
    <footer className='w-full min-h-20 bg-gradient-to-r from-[#E41F4733] to-[#FDA80033] py-10 px-6 flex flex-wrap gap-6 justify-between lg:py-20 lg:px-16 '>
      <section className='w-full h-fit space-y-6 font-Inter column text-text_1 lg:w-1/2'>
        <Dispa8chLogo size={0.7} />
        <p>
          Dispa8ch simplifies local delivery management for restaurants, ghost
          kitchens and small businesses. With smart automation and real-time
          tracking, it saves time and money while ensuring customer satisfaction
          through staff messaging and SMS notifications.
        </p>
      </section>
      <Links />
      <section className='w-full h-fit flex flex-wrap justify-between items-end gap-6'>
        <div className='space-y-4'>
          <h1 className='font-Inter_Bold'>Follow us on</h1>
          <div className='w-fit h-fit flex gap-3'>
            {socialMediaLinks.map((Icon, i) => (
              <Icon
                size={0.7}
                key={i}
              />
            ))}
          </div>
        </div>
        <div className='w-fit h-fit flex gap-1 items-center'>
          <CopyRightIcon size={0.5} />
          <p className='font-Inter_Medium text-sm'>
            All rights reserved 2024 Dispa8ch
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
