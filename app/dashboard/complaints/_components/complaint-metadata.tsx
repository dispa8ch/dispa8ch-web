import Link from "next/link";

type Props = {
  text: string | number;
  className?: string;
  prefix:
  | 'From:'
  | 'Placed from:'
  | 'Time:'
  | 'Date:'
}

const ComplaintMetadata: React.FC<Props> = ({ text, prefix, className }) => {
  return (
    <p className={className} >{prefix} <span className="text-[#171717] font-Inter_Bold ">{text}</span></p>

  )
}

type LinkProps = Omit<Props, 'prefix'> & {
  link: string | number;
  prefix:
  | 'Order ID:';
}

const ComplaintMetadataLink: React.FC<LinkProps> = ({ link, text, prefix, className }) => {
  return (
    <p className={className}>{prefix} <Link href={`/dashboard/orders?orderId=${link}`} className="text-dispa8chRed-10 font-Inter_Medium underline ">{text}</Link></p>

  )
}


export default Object.assign(ComplaintMetadata, {
  Link: ComplaintMetadataLink
})