import { uppercase } from "@/lib";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import data from "@/public/data/team.json";

/**
 * @todo change the contact us link.
 */
const ContactUsButton = () => {
  return (
    <div className='fit absolute -right-5 -bottom-16'>
      <Link
        href={"/contact-us"}
        className='fit column items-center justify-center text-[12px] gap-2 font-Inter'>
        <div className='fit p-5 rounded-full bg-dispa8chRed-100'>
          <ChatBubbleOvalLeftEllipsisIcon
            className='stroke-dispa8chRed-500 fill-none'
            width={30}
            height={30}
          />
        </div>
        <p>Contact Us</p>
      </Link>
    </div>
  );
};

type TeamMemberProps<T = string> = (typeof data.team_members)[number];
const TeamMember = ({ src, fullName, title }: TeamMemberProps) => {
  return (
    <div
      className='w-[225px] min-w-[225px] h-[350px] bg-transparent py-8 px-6 column justify-end gap-4 font-Inter text-white text-[12px]'
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: "",
        backgroundSize: "cover",
      }}>
      <h1 className='font-Inter_Bold text-xl'>{fullName}</h1>
      <p>{uppercase(title)}</p>
    </div>
  );
};

/**
 * @todo add an overlay between the background and the text;
 */
const TeamSection = () => {
  return (
    <section className='w-full h-fit py-6 column items-center gap-12 px-6 lg:px-16'>
      <h1 className='text-dispa8chRed-500 text-xl underline font-Inter_ExtraBold lg:text-2xl '>
        Meet The Team
      </h1>

      <section className='w-full min-h-[400px] bg-gradient-to-r from-dispa8chRed-100 to-dispa8chRed-50 relative '>
        <ContactUsButton />
        <section className='w-full min-h-[400px] p-6 flex gap-16 overflow-x-scroll no-scroll '>
          {data.team_members.map((member, i) => (
            <TeamMember
              key={i}
              {...member}
            />
          ))}
        </section>
      </section>
    </section>
  );
};

export default TeamSection;
