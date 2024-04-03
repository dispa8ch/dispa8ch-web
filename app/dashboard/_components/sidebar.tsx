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
 * @todo add the expansion functionality for the sidebar where the _name prop will be used.
 */
const Sidebar = () => {
  return (
    <section className="w-fit h-full bg-transparent pt-40 px-3 border-r border-r-gray-200 column gap-6 " >
      {sidebarLinks.map(({ link, icon: Icon, name: _name }) => (
        <Link className="fit p-2 rounded-sm transition-colors duration-300 focus:bg-gray-300 " href={link} >
          <Icon size={1.5} />
        </Link>
      ))}
    </section>
  )
};

export default Sidebar;