
import { BaseButton } from "@/components/buttons"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

type Props = {
  trigger: React.JSX.Element;
}

/**
 * @todo form submission for when the send button is clicked
 */
const ResponseDialog: React.FC<Props> = ({trigger}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-blue-100 h-[40vh] ">
        <DialogHeader>
          <DialogTitle>Complaint Response</DialogTitle>
        </DialogHeader>
        <section className="flex items-center gap-2 font-Inter_Medium text-sm">
          <button className="w-1/2 h-fit py-2.5 pl-3.5 text-start bg-white border-2 border-gray-200 rounded-lg text-gray-300 " tabIndex={1}>
            From: <span className="text-gray-500">GIG Logistics</span>
          </button>
          <button className="w-1/2 h-fit py-2.5 pl-3.5 text-start bg-white border-2 border-gray-200 rounded-lg text-gray-300 " tabIndex={1}>
            From: <span className="text-gray-500">GIG Logistics</span>
          </button>
          {/* <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button> */}
        </section>
        <DialogFooter className="sm:justify-end ">
          <DialogClose asChild>
            <BaseButton className="bg-gray-300 text-gray-500 border border-gray-500" >Cancel</BaseButton>
          </DialogClose>
          <DialogClose asChild>
            <BaseButton>Send</BaseButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ResponseDialog
