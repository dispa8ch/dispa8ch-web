import { ArrowLeftFromLine, ThumbsUpIcon } from "lucide-react";
import Image from "next/image";

const UserCommentReply = ({ userName, profileImage, message, replies }: TComment<true>) => {
  return (
    <section className={`w-full min-h-[50px] pl-[56px] flex items-start gap-2`}>
      <div className="min-h-[inherit] w-0.5 bg-slate-500 rounded-full" />
      <div className="w-full flex items-start gap-4">
        <div className="w-[40px] h-[40px] bg-gray-500 rounded-full">
          <Image width={40} height={40} src={profileImage} alt={userName} className="w-full h-full rounded-[inherit] object-cover " />
        </div>
        <article className="flex-grow column gap-2">
          <h3 className="text-base font-Inter_Medium text-dispa8chRed-800">{userName}</h3>
          <p className="text-sm font-Inter text-dispa8chRed-300">{message}</p>
        </article>
        <div className="w-fit h-full ml-auto flex items-center gap-3">
          <ThumbsUpIcon size={20} className="stroke-dispa8chRed-300" />
          <ArrowLeftFromLine size={20} className="stroke-dispa8chRed-300" />
        </div>
      </div>
      {/* Replies section */}
      {replies ? (
        <div className="w-full column mt-4 gap-4">
          {replies?.map((commentReply, i) => <UserCommentReply {...commentReply} key={i} />)}
        </div>
      ) : ''}
    </section>
  )
};

/**
 * @todo add an event listener to the parent div of the thumbsup and Backward icons for interactivity
 */
const UserComment = ({ userName, profileImage, message, replies }: TComment<false>) => {
  return (
    <section className={`w-full min-h-[50px]`}>
      <div className="w-full flex items-start gap-4">
        <div className="w-[40px] h-[40px] bg-gray-500 rounded-full">
          <Image width={40} height={40} src={profileImage} alt={userName} className="w-full h-full rounded-[inherit] object-cover " />
        </div>
        <article className="flex-grow column gap-2">
          <h3 className="text-base font-Inter_Medium text-dispa8chRed-800">{userName}</h3>
          <p className="text-sm font-Inter text-dispa8chRed-300">{message}</p>
        </article>
        <div className="w-fit h-full ml-auto flex items-center gap-3">
          <ThumbsUpIcon size={20} className="stroke-dispa8chRed-300" />
          <ArrowLeftFromLine size={20} className="stroke-dispa8chRed-300" />
        </div>
      </div>
      {/* Replies section */}
      {replies ? (
        <div className="w-full column mt-4 gap-4">
          {replies?.map((commentReply, i) => <UserCommentReply {...commentReply} key={i} />)}
        </div>
      ) : ''}
    </section>
  )
};

export default UserComment;