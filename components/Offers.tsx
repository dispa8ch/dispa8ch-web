import Offer from "./Offer";

const Offers = () => {
  return (
    <section className="w-full h-fit px-6 column items-center gap-6 lg:px-16 ">
      <h1 className="text-dispa8chRed text-xl underline font-Inter_ExtraBold lg:text-2xl ">What You Can Do</h1>
      <section className="w-full h-fit column gap-6"> 
        <Offer />
      </section>
    </section>
  )
};

export default Offers;