import { Copy } from "lucide-react"

import { BaseButton } from "@/components/buttons"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Props = {
  trigger: JSX.Element;
}

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
        <section className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
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
