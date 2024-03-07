import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type MobileNavButtonsProps = {
  menuState: [boolean, Dispatch<SetStateAction<boolean>>];
};

const MobileNavButtons = ({ menuState }: MobileNavButtonsProps) => {
  const router = useRouter();
  const buttons = [
    {
      icon: UserCircleIcon,
      onClick: () => router.push("/account"),
    },
    {
      icon: Bars3Icon,
      onClick: () => setMenu(!menu),
    },
  ] as const;
  const [menu, setMenu] = menuState;
  return (
    <section className='fit ml-auto flex gap-3 lg:hidden'>
      {buttons.map(({ icon: Icon, onClick }, i) => (
        <button
          key={i}
          onClick={onClick}>
          <Icon
            width={24}
            height={24}
          />
        </button>
      ))}
    </section>
  );
};

export default MobileNavButtons;
