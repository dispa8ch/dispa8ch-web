import { uppercase } from "@/lib";
import data from "@/public/data/team.json";

type TeamMemberProps = (typeof data.team_members)[number];
const TeamMember = ({ src, fullName, title }: TeamMemberProps) => {
  return (
    <div
      className='w-[225px] min-w-[225px] h-[350px] bg-transparent py-8 px-6 relative overlay column justify-end gap-4 font-Inter text-white text-[12px]'
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: "",
        backgroundSize: "cover",
      }}>
      <h1 className='font-Inter_Bold text-xl relative z-20'>{fullName}</h1>
      <p className='relative z-20'>{uppercase(title)}</p>
    </div>
  );
};

/**
 * @todo add a good enough overlay between the background and the text;
 */
const TeamSection = () => {
  return (
    <section className='w-full h-fit py-6 column items-center gap-12 px-6 lg:px-16'>
      <h1 className='text-dispa8chRed-500 text-xl underline font-Inter_ExtraBold lg:text-2xl '>
        Meet The Team
      </h1>

      <section className='w-full min-h-[400px] bg-gradient-to-r from-dispa8chRed-100 to-dispa8chRed-50 relative '>
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
