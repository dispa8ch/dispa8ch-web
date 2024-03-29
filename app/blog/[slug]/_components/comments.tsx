import CommentInput from "./comment-input";
import CommentsFallback from "./comments-fallback";
import UserComment from "./user-comment";

type CommentsProps = {
  comments: Array<TComment>;
};

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  const length = comments?.length;
  return (
    <section className="w-full h-fit column gap-12">
      <h1 className="text-dispa8chRed-600 text-xl mr-auto lg:text-2xl font-Inter_ExtraBold ">Comments</h1>
      <section className="w-full column gap-4 ">
        <section className="w-full column gap-4">
          {(Boolean(length) ? comments?.map((comment, i) => {
            return <UserComment {...comment} key={i} />
          }) : <CommentsFallback />)}
        </section>
      </section>
      <section className="w-full pl-[66px] " >
        <CommentInput />
      </section>
    </section>
  )
};

export default Comments;