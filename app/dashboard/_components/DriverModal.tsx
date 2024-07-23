import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DriverModal = () => {
  return (
    <Dialog>
      <DialogTrigger>Add New Driver</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold">
            Add a new driver
          </DialogTitle>
        </DialogHeader>

        <div className="flex gap-4">
          <div className="">
            <Label htmlFor="name" className="text-righ t">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="phone" className="text-righ t">
              Phone Number
            </Label>
            <Input
              id="phone"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DriverModal;
