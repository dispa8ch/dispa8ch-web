import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { BellDotIcon, MessageCircleMore, MessageSquareTextIcon } from "lucide-react";
import Link from "next/link";
import AccountPopOver from "./account-popover";

const menubuttons = [
  {
    name: 'Complaints',
    link: '/dashboard/complaints',
    icon: MessageSquareTextIcon
  },
  {
    name: 'Notifications',
    link: '/dashboard/notifications',
    icon: BellDotIcon
  },
  {
    name: 'Chatbox',
    link: '/dashboard/chat',
    icon: MessageCircleMore
  },
  {
    name: 'Support',
    link: '/dashboard/support',
    icon: QuestionMarkCircleIcon
  }
] as const

type HeaderProps = {
  emailAddress: string;
}

const Header: React.FC<HeaderProps> = ({emailAddress}) => {
  return (
    <header className="w-full h-fit p-3 font-Inter bg-white border-b border-b-gray-300 flex items-center gap-4 " >
      <section className="fit column gap-1">
        <h2 className="text-[#171717] text-lg font-Inter_Bold  ">Dispa8ch Logistics</h2>
        <p className="text-gray-400 text-xs">Powered by Dispa8ch</p>
      </section>
      <section className="fit ml-auto text-sm flex items-center gap-4">
        {menubuttons.map(({ icon: Icon, name, link }, i) => (
          <Link href={link} key={i} className="fit column items-center justify-center gap-0.5 text-gray-600 fill-none stroke-[#171717] hover:text-dispa8chRed-500 hover:stroke-dispa8chRed-500 ">
            <Icon size={1} width={24} height={24} strokeWidth={2.4} className="stroke-inherit fill-inherit transition-all duration-500 " />
            <p className="text-inherit font-Inter_Medium transition-all duration-500 " >{name}</p>
          </Link>
        ))}
        <section className="w-fit h-fit font-Graphik relative" >
          <AccountPopOver emailAddress={emailAddress} />
        </section>
      </section>
    </header>
  )
};

export default Header;