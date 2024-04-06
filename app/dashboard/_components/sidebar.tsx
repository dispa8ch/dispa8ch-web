import { DashboardIcon, ReportIcon, RiderIcon, RiderRouteIcon, ShoppingBagIcon } from "@/components/dispa8ch-icons";
import { Dispa8chLogoMobile } from "@/public/icons";
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

const Sidebar = () => {
  return (
    <aside className="w-fit h-screen relative z-[5] bg-transparent column gap-8 py-3 items-center font-Inter_Medium px-3 border-r border-r-gray-300 transition-[width] duration-700 group " >
      <section>
        <Link href={'/'} className="fit block py-1 px-3 border-2 border-dispa8chRed-300 rounded-md">
          <Dispa8chLogoMobile size={.68} />
        </Link>
      </section>
      <section className="column gap-6 " >
        {sidebarLinks.map(({ link, icon: Icon, name }, i) => (
          <Link className="w-full py-2 px-3 flex items-center gap-2 rounded-md transition-colors duration-300 hover:bg-gray-300 group-hover:pr-12 " href={link} key={i} >
            <Icon size={1.07} />
            <p className="text-lg hidden group-hover:block ">{name}</p>
          </Link>
        ))}
      </section>

    </aside>
  )
};

export default Sidebar;