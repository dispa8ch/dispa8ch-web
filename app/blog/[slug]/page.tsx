import Footer from "@/app/_components/Footer";
import OurBlogs from "@/app/_components/OurBlogs";
import { Header } from "@/components/dispa8ch-ui";
import BreadCrumbs from "./_components/bread-crumbs";
import Comments from "./_components/comments";

const testCrumbs = ["Blog", "Tech", "New-Feature-Release"]

type BlogProps = {} & NextPageProps;

/**
 * @todo write the UI code for the Main Blog section;
 * should come as markdown
 * @todo work on the dark mode for all the sections
 * @todo work on connecting the components to each other
 */
const Blog = ({params}: BlogProps) => {
  console.log(params);
  return (
    <>
      <Header />
      <main className="h-fit bg-transparent pt-12 px-4 space-y-6 lg:px-8" >
        <BreadCrumbs className="mr-auto" crumbs={testCrumbs} />
        <Comments />
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