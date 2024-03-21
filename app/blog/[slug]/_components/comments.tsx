import CommentInput from "./comment-input";

type CommentsProps = {
  comments?: Array<TComment>;
};

const testComments: Array<TComment> = [
  { message: 'I really love this article eh', profileImage: '/images/team/caleb.jpg', userName: 'Uzoma Caleb', reply: false }
]

const Comments = ({comments}: CommentsProps = {}) => {
  return (
    <section className="w-full h-fit column gap-12">
      <h1 className="text-dispa8chRed-950 text-xl mr-auto lg:text-2xl font-Inter_ExtraBold ">Comments</h1>
      <section className="w-full column gap-4 ">
        <section className="w-full column gap-4">
          {testComments.map(comment => {
            return <div />
          })}
        </section>
        <section className="w-full pr-[116px] " >
          <CommentInput />
        </section>
      </section>
    </section>
  )
};

export default Comments;