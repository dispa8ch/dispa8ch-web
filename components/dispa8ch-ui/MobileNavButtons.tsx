import { MenuIcon, UserCircle2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type MobileNavButtonsProps = {
  menuState: [boolean, Dispatch<SetStateAction<boolean>>];
};

const MobileNavButtons = ({ menuState }: MobileNavButtonsProps) => {
  const router = useRouter();
  const buttons = [
    {
      icon: UserCircle2Icon,
      onClick: () => router.push("/account"),
    },
    {
      icon: MenuIcon,
      onClick: () => setMenu(!menu),
    },
  ] as const;
  const [menu, setMenu] = menuState;
  return (
    <section className='fit ml-3 flex gap-3 md:ml-auto lg:hidden'>
      {buttons.map(({ icon: Icon, onClick }, i) => (
        <button
          key={i}
          onClick={onClick} className="fit p-2 bg-black/20 backdrop-blur-3xl rounded-full" >
          <Icon
            size={26}
            className="stroke-gray-600 "
          />
        </button>
      ))}
    </section>
  );
};

export default MobileNavButtons;
