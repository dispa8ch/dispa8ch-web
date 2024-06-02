import OurBlogs from "@/app/_components/OurBlogs";
import BreadCrumbs from "./_components/bread-crumbs";
import Comments from "./_components/comments";

type BlogProps = {} & NextPageProps<{
  slug: string;
}>;

/**
 * @todo write the UI code for the Main Blog section;
 * should come as markdown
 * @todo create a parser to parse some json and create the breadcrumbs to be passed to the Breadcrumbs component
 */
const Blog: React.FC<BlogProps> = () => {
  return (
    <>
      <main className="h-fit bg-transparent pt-12 px-4 space-y-6 lg:px-8" >
        <BreadCrumbs className="mr-auto" crumbs={[]} />
        <Comments comments={[]} />
        <section className="w-full column gap-16">
          <h1 className="text-dispa8chRed-600 text-xl mr-auto lg:text-2xl font-Inter_ExtraBold ">Related Blogs</h1>
          <section className="w-full">
            <OurBlogs />
          </section>
        </section>
      </main>
    </>
  )
};

export default Blog;