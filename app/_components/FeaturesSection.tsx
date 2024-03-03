import Feature from "./Feature";
import data from '@/public/data/features.json'

const FeaturesSection = () => {
  return (
    <section id="services" className="w-full h-fit column items-center gap-12 py-10 px-6 lg:px-16">
      <h1 className="text-dispa8chRed-500 text-xl underline font-Inter_ExtraBold lg:text-2xl ">What You Can Do</h1>
      <section className="w-full h-fit column gap-14"> 
        {data.features.map((feature, i) => (
          <Feature {...feature} key={i} />
        ))}
      </section>
    </section>
  )
};

export default FeaturesSection;