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
  sender: string
  trigger: React.JSX.Element;
}

/**
 * @todo function that gets the current logistics company name 
 */
const SupportDialog: React.FC<Props> = ({ trigger, sender }) => {
  const responseRef = useRef<HTMLFormElement>(null);
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md min-h-[40vh] ">
        <DialogHeader>
          <DialogTitle className="font-bold">Need Help?</DialogTitle>
        </DialogHeader>
        <form ref={responseRef} className="flex flex-col items- gap-2 font-Inter_Medium text-sm">
          <p className="my-2"> <span className="text-slate-400 ">Call us:</span>  +234 808 768 5678</p>
          <p className="font-bold">Send us a message</p>
          <section className="w-full flex items-center gap-2">
            <button disabled className="w-1/2 h-fit py-2.5 pl-3.5 text-start bg-white border border-gray-200 rounded-lg text-gray-400 " tabIndex={1}>
              From: <span className="text-gray-500">{sender}</span>
            </button>
            <button disabled className="w-1/2 h-fit py-2.5 pl-3.5 text-start bg-white border border-gray-200 rounded-lg text-gray-400 " tabIndex={1}>
              To: <span className="text-gray-500">Dispa8ch Inc.</span>
            </button>
          </section>
          <Textarea name="response" rows={10} placeholder="Enter your message" className="placeholder:text-gray-300 " ></Textarea>
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

export default SupportDialog
