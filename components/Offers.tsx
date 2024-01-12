import Offer from "./Offer";

const Offers = () => {
  return (
    <section className="w-full h-fit px-16 column items-center gap-6">
      <h1 className="text-dispa8chRed text-2xl underline font-Inter_ExtraBold ">What You Can Do</h1>
      <section className="w-full h-fit column gap-6"> 
        <Offer />
      </section>
    </section>
  )
};

export default Offers;