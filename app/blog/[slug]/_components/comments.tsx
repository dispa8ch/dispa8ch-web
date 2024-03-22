import CommentInput from "./comment-input";
import UserComment from "./user-comment";

type CommentsProps = {
  comments?: Array<TComment>;
};

const testComments: Array<TComment> = [
  { message: 'I really love this article eh', profileImage: '/images/team/caleb.jpg', userName: 'Uzoma Caleb', },
  {
    message: 'How do I use Dispa8ch?',
    profileImage: '/images/team/edward.jpg',
    userName: 'Chike Chikelu',
    replies: [
      { 
        message: 'You have to sign up with the company your work for, see your dashboard and then use it',
        profileImage: '/images/team/medah.jpg',
        userName: 'Iyke Charles',
      }
    ]
  },
  {
    message: "Can I connect my Momo account here?",
    profileImage: '/images/team/Samson.jpeg',
    userName: 'Samson Samson',
    replies: [
      {
        message: "Yes yoou can",
        profileImage: '/images/team/levi.jpg',
        userName: 'Levi'
      },
      {
        message: "Yes yoou can",
        profileImage: '/images/team/levi.jpg',
        userName: 'Levi'
      }
    ]
  }
]

const Comments = ({ comments }: CommentsProps = {}) => {
  return (
    <section className="w-full h-fit column gap-12">
      <h1 className="text-dispa8chRed-950 text-xl mr-auto lg:text-2xl font-Inter_ExtraBold ">Comments</h1>
      <section className="w-full column gap-4 ">
        <section className="w-full column gap-4">
          {testComments.map((comment, i) => {
            return <UserComment {...comment} key={i} />
          })}
        </section>
        <section className="w-full pl-[66px] " >
          <CommentInput />
        </section>
      </section>
    </section>
  )
};

export default Comments;