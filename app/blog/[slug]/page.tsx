import Footer from "@/app/_components/Footer";
import OurBlogs from "@/app/_components/OurBlogs";
import { Header } from "@/components/dispa8ch-ui";
import BreadCrumbs from "./_components/bread-crumbs";

const testCrumbs = ["Blog", "Tech", "New-Feature-Release"]

type BlogProps = {};

/**
 * @todo Get the params for the page fetch some markdown content and then display it here;
 */
const Blog = (props?: BlogProps) => {
  return (
    <>
      <Header />
      <main className="h-fit bg-transparent pt-12 px-4 space-y-6 lg:px-8" >
        <BreadCrumbs className="mr-auto" crumbs={testCrumbs} />
        <section className="w-full h-fit flex flex-col items-center justify-center gap-4 " >
          <h1 className="text-xl bg-gradient-to-r from-dispa8chRed-500 to-amber-500 text-transparent bg-clip-text" ></h1>
        </section>
        {/* Published metadata and big image */}
        {/* Blog text; actually should come as markdown */}
        {/* Comments */}
        <section className="w-full column gap-16">
          <h1 className="text-dispa8chRed-600 text-xl mr-auto lg:text-2xl font-Inter_ExtraBold ">Related Blogs</h1>
          <section className="w-full">
            <OurBlogs />
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
};

export default Blog;