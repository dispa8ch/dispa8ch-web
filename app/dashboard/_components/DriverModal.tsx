import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DriverModal = () => {
  return (
    <Dialog>
      <DialogTrigger>Add New Driver</DialogTrigger>
      <DialogContent className="w-[7000px] border-blue-950 border-4">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold">
            Add a new driver
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col border w-fit gap-7">
          <div className="flex gap-4">
            <div className="">
              <Label htmlFor="name" className="text-righ t">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter rider name"
                className="col-span-3 focus:outline-1 outline-none"
              />
            </div>
            <div className="">
              <Label htmlFor="phone" className="text-righ t">
                Phone Number
              </Label>
              <Input
                id="phone"
                placeholder="000 000 0000"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="">
            <Label htmlFor="email" className="text-righ t">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Enter email address"
              className="col-span-3"
            />
          </div>
          <div className="flex gap-4 ">
            <div className="">
              <Label htmlFor="meansofid" className="text-righ t">
                Means of Id
              </Label>
              <Input id="meansofid" placeholder="NIN" className="col-span-3" />
            </div>
            <div className="">
              <Label htmlFor="DOB" className="text-righ t">
                Date Of Birth
              </Label>
              <Input
                type="date"
                id="DOB"
                placeholder="street @ US"
                className="col-span-3"
              />
            </div>
            <div className="">
              <Label htmlFor="sex" className="text-righ t">
                Sex
              </Label>
              <Select>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Male" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Male</SelectItem>
                  <SelectItem value="dark">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="">
              <Label htmlFor="address" className="text-righ t">
                Residential Address
              </Label>
              <Input
                id="address"
                placeholder="Enter riders residential address"
                className="col-span-3 "
              />
            </div>
            <div className="">
              <Label htmlFor="vehicle" className="text-righ t">
                Vehicle
              </Label>
              <Input
                id="vehicle"
                placeholder="Motorbike"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="">
            <Label htmlFor="note" className="text-righ t">
              Note
            </Label>
            <Textarea id="note" placeholder="" className="col-span-3" />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <div className=" bg-gray-400 text-slate-800 px-2 py-1">Cancel</div>
          <div className="bg-[#A91432] text-white px-2 py-1">Save</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DriverModal;
