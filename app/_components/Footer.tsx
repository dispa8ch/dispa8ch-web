import { entries, lowercase } from "@/lib";
import { Dispa8chLogo } from "@/public/icons";
import Link from "next/link";
import { CopyRightIcon, SocialMedia } from "@/components/dispa8ch-icons";

const Links = () => {
  const linkSections = {
    Product: ["Pricing", "FAQ"],
    Company: ["Terms of Service", "Privacy policy"],
    "Contact Us": ["support@gmail.com", "Call us +234 709 867 7689"],
  } as const;

  const LinkSection = <T extends Helpers.Keyof<typeof linkSections>>({
    name,
    links,
  }: {
    name: T;
    links: (typeof linkSections)[T];
  }) => {
    return (
      <div className='w-fit h-fit text-base font-Inter column gap-6'>
        <h1 className='font-Inter_Bold'>{name}</h1>
        {links.map((link, i) => (
          <Link key={i} href={lowercase(link)}>
            <p>{link}</p>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <section className='w-full h-fit flex justify-between items-start flex-wrap gap-6 lg:w-2/5 lg:h-full'>
      {entries(linkSections).map(([name, links], i) => (
        <LinkSection name={name} links={links} key={i} />
      ))}
    </section>
  );
};

/**
 * @todo get the original links for the social media icons;
 * @todo get a better fitting copyright icon.
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
              <Icon size={0.7} key={i} />
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
