import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CreditCardModal = () => {
  return (
    <Dialog>
      <DialogTrigger>Add</DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Credit Card Information
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col  w-fit gap-7">
          <div className="">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-rig">
                Name on Card
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                className="focus:outline-0 outline-none"
              />
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="">
              <Label htmlFor="card_number" className="text-righ t">
                Card Number
              </Label>
              <Input
                id="meansofid"
                placeholder="XXX XXXX XXXX XXXX"
                className=""
              />
            </div>
            <div className="w-1/5">
              <Label htmlFor="address" className="text-righ t">
                CVV
              </Label>
              <Input id="address" placeholder="XXX" className="col-span-3 " />
            </div>
            <div className="w-1/3">
              <Label htmlFor="vehicle" className="text-righ t">
                Valid Thru
              </Label>
              <div className="flex gap-2 ">
                <Input
                  id="vehicle"
                  placeholder="MM"
                  className=""
                />
                <Input
                  id="vehicle"
                  placeholder="YY"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 cursor-pointer">
          <div className=" bg-gray-200 text-slate-800 px-2 py-1">Cancel</div>
          <div className="bg-[#A91432] text-white px-2 py-1">Submit</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreditCardModal;
