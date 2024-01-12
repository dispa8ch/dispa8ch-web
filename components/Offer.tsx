type OfferProps = {};

const Offer = (props?: OfferProps) => {
  return (
    <section
      className='w-full h-fit flex justify-between gap-6
    font-Inter_Medium '>
      <section className='w-fit flex-grow column gap-6'>
        <h1 className='font-Inter_Bold text-xl bg-gradient-to-r from-dispa8chRed to-amber-500 text-transparent bg-clip-text'>
          Automate your workflow
        </h1>
        <p>
          Whether you're a logistics company seeking workflow automation or a
          business owner working a simple way to ship and monitor goods in
          real-time, we have the solution.
        </p>
        <p>
          Gain access to a network of African logistics companies, offering you
          seamless options to transport your goods from the convenience of your
          workspace or home.
        </p>
        <button className='w-fit h-fit mt-auto bg-dispa8chRed text-white font-Inter_Bold px-8 py-1 rounded-md '>
          Start free
        </button>
      </section>
      <section className="w-[800px] h-[280px] bg-amber-400"></section>
    </section>
  );
};

export default Offer;
