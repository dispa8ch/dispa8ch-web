'use client'
import { BaseButton } from "@/components/buttons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";

type Props = {
  trigger: React.JSX.Element;
  sender: string;
  receiver: string;
}

/**
 * @todo form submission for when the send button is clicked
 */
const ResponseDialog: React.FC<Props> = ({ trigger, receiver, sender }) => {
  const responseRef = useRef<HTMLFormElement>(null);
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md min-h-[40vh] ">
        <DialogHeader>
          <DialogTitle>Complaint Response</DialogTitle>
        </DialogHeader>
        <form ref={responseRef} className="flex flex-col items-center gap-2 font-Inter_Medium text-sm">
          <section className="w-full flex items-center gap-2">
            <button disabled className="w-1/2 h-fit py-2.5 pl-3.5 text-start bg-white border border-gray-200 rounded-lg text-gray-400 " tabIndex={1}>
              From: <span className="text-gray-500">{sender}</span>
            </button>
            <button disabled className="w-1/2 h-fit py-2.5 pl-3.5 text-start bg-white border border-gray-200 rounded-lg text-gray-400 " tabIndex={1}>
              From: <span className="text-gray-500">{receiver}</span>
            </button>
          </section>
          <Textarea name="response" rows={10} placeholder="Enter your response" className="placeholder:text-gray-300 " ></Textarea>
        </form>
        <DialogFooter className="sm:justify-end ">
          <DialogClose asChild>
            <BaseButton className="bg-gray-200 text-gray-400 border border-gray-400 hover:bg-gray-100 dark:hover:bg-dispa8chRed-700" >Cancel</BaseButton>
          </DialogClose>
          <DialogClose asChild>
            <BaseButton onClick={() => responseRef.current?.requestSubmit()} >Send</BaseButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ResponseDialog
