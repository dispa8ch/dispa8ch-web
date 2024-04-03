import { BellIcon, ChatBubbleIcon, ComplaintsIcon, QuestionCircleIcon } from "@/components/dispa8ch-icons";
import Link from "next/link";

const menubuttons: Array<{
  name: string;
  link: `/dashboard${string}`,
  icon: Dispa8chIcon
}> = [
  {
    name: 'Complaints',
    link: '/dashboard/complaints',
    icon: ComplaintsIcon
  },
  {
    name: 'Notifications',
    link: '/dashboard/notifications',
    icon: BellIcon
  },
  {
    name: 'Chatbox',
    link: '/dashboard/chat',
    icon: ChatBubbleIcon
  },
  {
    name: 'Support',
    link: '/dashboard/support',
    icon: QuestionCircleIcon
  }
]

type HeaderProps = {
  emailAddress: string
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="w-full h-fit p-2 border-b border-b-gray-300 flex items-center gap-3 fixed z-10 " >
      <section className="fit column gap-1">
        <h2 className="text-[#171717] text-lg ">Dispa8ch Logistics</h2>
        <p className="text-gray-300 text-sm">Powered by Dispa8ch</p>
      </section>
      <section className="fit ml-auto flex items-center gap-2">
        {menubuttons.map(({icon: Icon, name, link}, i) => (
          <Link href={link} key={i} className="fit column items-center justify-center gap-1 text-gray-600 fill-[#171717] focus:text-dispa8chRed-500 focus:fill-dispa8chRed-500 ">
            <Icon size={1} className="stroke-inherit fill-inherit transition-all " />
            <p className="text-inherit transition-all " >{name}</p>
          </Link>
        ))}
      </section>
      <div className="fit p-3 bg-dispa8chRed-500 rounded-full">
        <p className="text-white text-2xl">{props.emailAddress.at(0)?.toUpperCase()}</p>
      </div>
    </header>
  )
};

export default Header;