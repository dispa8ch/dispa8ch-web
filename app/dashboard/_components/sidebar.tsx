import { DashboardIcon, ReportIcon, RiderIcon, RiderRouteIcon, ShoppingBagIcon } from "@/components/dispa8ch-icons";
import Link from "next/link";

const sidebarLinks: Array<{
  link: `/dashboard${string}`,
  name: string,
  icon: Dispa8chIcon
}> = [
    {
      link: '/dashboard',
      name: 'Analytics',
      icon: DashboardIcon
    },
    {
      link: '/dashboard/orders',
      name: 'Orders',
      icon: ShoppingBagIcon
    },
    {
      link: '/dashboard/riders',
      name: 'Riders',
      icon: RiderIcon
    },
    {
      link: '/dashboard/maps',
      name: 'Maps',
      icon: RiderRouteIcon
    },
    {
      link: '/dashboard/reports',
      name: 'Reports',
      icon: ReportIcon
    },
  ]

/**
 * @todo work on the animation for the sidebar expansion
 */
const Sidebar = () => {
  return (
    <section className="w-fit h-screen fixed z-[5] bg-transparent font-Inter_Medium pt-20 px-3 border-r border-r-gray-300 column gap-6 transition-all duration-700 group " >
      {sidebarLinks.map(({ link, icon: Icon, name }, i) => (
        <Link className="w-full py-2 px-3 flex items-center gap-2 rounded-md transition-colors duration-300 hover:bg-gray-300 group-hover:pr-12 " href={link} key={i} >
          <Icon size={1.07} />
          <p className="text-lg hidden group-hover:block ">{name}</p>
        </Link>
      ))}
    </section>
  )
};

export default Sidebar;