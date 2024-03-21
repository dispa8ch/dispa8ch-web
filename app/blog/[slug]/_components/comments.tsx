import CommentInput from "./comment-input";

type CommentsProps = {};

const Comments = (props?: CommentsProps) => {
  return (
    <section className="w-full h-fit column gap-16">
      <h1 className="text-dispa8chRed-950 text-xl mr-auto lg:text-2xl font-Inter_ExtraBold ">Comments</h1>
      <section className="w-full column gap-4 ">
        {/* Actual Comments section */}
        <section className="w-full pr-[116px] " >
          <CommentInput />
        </section>
      </section>
    </section>
  )
};

export default Comments;