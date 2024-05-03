import { CopyRightIcon, SocialMedia } from "@/components/dispa8ch-icons";
import { Dispa8chLogo } from "@/public/icons";
import Link from "next/link";
import FooterLinks from "./FooterLinks";

/**
 * @todo get the original links for the social media icons;
 */
const Footer = () => {
  const socialMediaLinks = [
    {
      link: "https://twitter.com/dispa8ch?s=21&t=w20twLbeVrjD-AIF1wONlg",
      icon: SocialMedia.TwitterIcon,
    },
    {
      link: "",
      icon: SocialMedia.FacebookIcon,
    },
    {
      link: "",
      icon: SocialMedia.YoutubeIcon,
    },
    {
      link: "https://www.instagram.com/dispa8ch/",
      icon: SocialMedia.InstagramIcon,
    },
    {
      link: "",
      icon: SocialMedia.LinkedInIcon,
    },
  ] as const;

  return (
    <footer className='w-full min-h-20 bg-gradient-to-r from-[#E41F4733] to-[#FDA80033] py-10 px-6 flex flex-wrap gap-6 justify-between lg:py-20 lg:px-16 '>
      {/* Text section */}
      <section className='w-full h-fit space-y-6 font-Inter column text-text_1 dark:text-solid_pink/[0.79] lg:w-1/2'>
        <Dispa8chLogo size={0.7} />
        <p>
          Dispa8ch simplifies local delivery management for restaurants, ghost
          kitchens and small businesses. With smart automation and real-time
          tracking, it saves time and money while ensuring customer satisfaction
          through staff messaging and SMS notifications.
        </p>
      </section>
      <FooterLinks />
      {/* Social media section */}
      <section className='w-full h-fit flex flex-wrap justify-between items-end gap-6 dark:text-white dark:fill-white '>
        <section className='space-y-4  '>
          <h1 className='font-Inter_Bold'>Follow us on</h1>
          <div className='w-fit h-fit flex gap-3'>
            {socialMediaLinks.map(({ icon: Icon, link }, i) => (
              <Link href={link} className='w-fit' key={i} >
                <Icon size={0.7} />
              </Link>
            ))}
          </div>
        </section>
        <section className='w-fit h-fit flex gap-1 items-center'>
          <CopyRightIcon size={0.5} />
          <p className='font-Inter_Medium text-sm'>
            All rights reserved 2024 Dispa8ch
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
