"use client";
import { ternary } from "@/lib";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

type NavigationProps = {
  navigationStack: CallableFunction[];
  setMenu: Dispatch<SetStateAction<boolean>>;
};

type MobileLinksProps = MenuLink & NavigationProps;

/**
 * the base icon props to be passed to a menu link
 */
const iconProps: SVGIconProps = {
  className: "w-5 h-5",
};

const MobileLinks = ({
  icon: Icon,
  name,
  to,
  sublinks,
  navigationStack,
  setMenu,
}: MobileLinksProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const sublinkIconProps: SVGIconProps = {
    ...iconProps,
    className: `w-5 h-5 ${open && "rotate-180"} transition-all duration-300`,
  };

  const linkClass = `w-full h-fit flex justify-between font-EmberBd text-xl pr-1 `;
  return (
    <section className='w-full h-fit column gap-3 '>
      {/* link */}
      <div
        className={linkClass}
        onClick={() => {
          if (to) {
            navigationStack.push(() => router.push(to!));
            setMenu(false);
          } else setOpen(!open);
        }}>
        <p>{name}</p>
        {Icon ? (
          <Icon {...ternary(sublinks, sublinkIconProps, iconProps)} />
        ) : (
          ""
        )}
      </div>

      {/* render sublinks if any */}
      {sublinks && (
        <div
          className={`w-full bg-white/20 backdrop-blur-xl rounded-2xl dropdown-menu flex flex-col gap-4 ${
            open && "shown"
          }`}>
          {sublinks.map(({ name, to }, i) => {
            return (
              <button
                key={i}
                className='fit '
                onClick={() => {
                  setOpen(!open);
                  if (to) {
                    navigationStack.push(() => router.push(to!));
                    setMenu(false);
                  }
                }}>
                {name}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default MobileLinks;
