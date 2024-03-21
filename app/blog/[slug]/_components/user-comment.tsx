import { BackwardIcon } from "@heroicons/react/24/outline";
import { ThumbsUpIcon } from "lucide-react";

type UserCommentProps = Partial<TComment>

/**
 * @todo add an event listener to the parent div of the thumbsup and Backward icons for interactivity
 * @todo create the UI for the reply section and test the whole thing out
 */
const UserComment = ({userName, profileImage, message}: UserCommentProps = {}) => {
  return (
    <section className="w-full column gap-2">
      <div className="w-full flex items-start gap-2">
        <div className="w-48 h-48 bg-gray-500 rounded-full">
          <img src={profileImage} alt={userName} className="w-full h-full rounded-[inherit] " />
        </div>
        <article className="flex-grow column gap-2">
          <h3 className="text-base font-Inter_Medium text-dispa8chRed-800">{userName}</h3>
          <p className="text-sm font-Inter text-dispa8chRed-300">{message}</p>
        </article>
        <div className="w-fit h-full ml-auto flex items-center gap-3">
          <ThumbsUpIcon size={20} className="stroke-dispa8chRed-300" />
          <BackwardIcon width={20} height={20} className="stroke-dispa8chRed-300" />
        </div>
      </div>
      {/* Reply section */}
      <div></div>
    </section>
  )
};

export default UserComment;