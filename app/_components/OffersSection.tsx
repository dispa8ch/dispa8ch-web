import data from "@/public/data/offers.json";
import { ClockCircle, EyeTracking, LinkPeople, Route } from "@/components/dispa8ch-icons";
import Link from "next/link";

type OfferProps = (typeof data.offers)[number];

const offerIcons: EmptyObject<typeof ClockCircle> = {
  0: ClockCircle,
  1: Route,
  2: EyeTracking,
  3: LinkPeople,
};

const Offer = ({ header, id, imageUrl, paragraph }: Partial<OfferProps>) => {
  const Icon = offerIcons[id!];
  return (
    <div
      className='min-w-[240px] w-[240px] h-[370px] p-5 flex flex-col justify-between items-end rounded-lg relative overlay after:rounded-[inherit] '
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "auto",
        backgroundPosition: "center 85%",
      }}>
        <div className="w-fit h-fit relative z-20">
          <Icon size={0.5} />
        </div>
      <div className='w-full min-h-1/2 mt-auto column gap-3 relative z-20 text-white text-[13px] font-Inter_Medium '>
        <h1 className='text-lg font-Inter_Bold'>{header}</h1>
        <p>{paragraph}</p>
        <button className='bg-dispa8chRed-400 py-2 rounded-md font-Inter_Bold '>
          <Link href='/dashboard'>Get Started</Link>
        </button>
      </div>
    </div>
  );
};

const OffersSection = () => {
  return (
    <section className='w-full h-fit py-6 column items-center gap-12 lg:px-16'>
      <h1 className='text-dispa8chRed-500 text-xl underline font-Inter_ExtraBold lg:text-2xl '>
        What Do We Offer?
      </h1>
      <section className='w-full min-h-[400px] bg-gradient-to-r from-dispa8chRed-100 to-dispa8chRed-50 p-6 flex gap-16 overflow-scroll no-scroll '>
        {data.offers.map((offer, i) => (
          <Offer {...offer} key={i} />
        ))}
      </section>
    </section>
  );
};

export default OffersSection;
