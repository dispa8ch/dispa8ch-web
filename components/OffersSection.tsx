import data from "@/public/data/offers.json";
import { ClockCircle, EyeTracking, LinkPeople, Route } from "./dispa8ch-icons";

type OfferProps = (typeof data.offers)[number] & {
  children?: React.ReactNode;
};

const offerIcons = {
  0: ClockCircle,
  1: Route,
  2: EyeTracking,
  3: LinkPeople,
};
offerIcons;
const Offer = (props?: Partial<OfferProps>) => {
  return (
    <div
      className='w-[240px] h-full p-4 '
      style={{
        backgroundImage: `url(${props?.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {props?.children}
    </div>
  );
};

const OffersSection = () => {
  return (
    <section className='w-full h-fit py-6 column items-center gap-12'>
      <h1 className='text-dispa8chRed-500 text-xl underline font-Inter_ExtraBold lg:text-2xl '>
        What Do We Offer?
      </h1>
      <section className='w-full h-[400px] bg-gradient-to-r from-dispa8chRed-100 to-dispa8chRed-50 py-6 pl-6 flex gap-8 '>
        <Offer imageUrl={data.offers[0].imageUrl}></Offer>
      </section>
    </section>
  );
};

export default OffersSection;
