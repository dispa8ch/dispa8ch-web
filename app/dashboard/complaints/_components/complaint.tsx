import { BaseButton } from "@/components/buttons";
import { getMDYString } from "../_utils";
import { complaints } from "../complaints.schema";
import ComplaintMetadata from "./complaint-metadata";

type ComplaintProps = typeof complaints[number]

const Complaint: React.FC<ComplaintProps> = ({ emailAddress: _emailAddress, date, location, complaintMessage, orderId, name, timeStamp }) => {
  return (
    <div className="w-full h-fit text-gray-400 font-Inter_Medium border border-gray-300 px-3 pt-4 pb-6 rounded-lg column gap-4  ">
      <div className="w-full flex items-center gap-6">
        <ComplaintMetadata prefix="From:" text={name} />
        <ComplaintMetadata.Link prefix="Order ID:" text={orderId} link={orderId} className="ml-auto" />
        <ComplaintMetadata prefix="Placed from:" text={location} className="ml-auto" />
        <ComplaintMetadata prefix="Date:" text={getMDYString(date)} className="ml-auto" />
        <ComplaintMetadata prefix="Time:" text={timeStamp} />
      </div>
      <p className="font-Inter_Medium text-[#171717] ">
        {complaintMessage}
      </p>
      <BaseButton className="font-Inter_Medium ml-auto" >
        Respond
      </BaseButton>
    </div>
  )
}

export default Complaint;