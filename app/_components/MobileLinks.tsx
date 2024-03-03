"use client";
import Link from "next/link";
import { useState } from "react";

const baseIconProps = {
  className: "w-5 h-5",
} as SVGIconProps;

const pickObj = <T, U>(bool: any, first: T, second: U) =>
  Boolean(bool) ? first : second;

const MobileLinks = ({ icon: Icon, name, to, sublinks }: MenuLink) => {
  const [open, setOpen] = useState(false);

  const iconProps = {
    ...baseIconProps,
    className: `w-5 h-5 ${open && "rotate-180"} transition-all duration-300`,
    onClick: () => {
      setOpen(!open);
    },
  } as SVGIconProps;

  const linkDescription = (
    <>
      <p>{name}</p>
      {Icon ? <Icon {...pickObj(sublinks, iconProps, baseIconProps)} /> : ""}
    </>
  );

  const linkClass = `w-full h-fit flex justify-between font-EmberBd text-xl pr-1 `;
  return (
    <div className='w-full h-fit column gap-3 '>
      {to ? (
        <Link
          href={to}
          className={linkClass}>
          {linkDescription}
        </Link>
      ) : (
        <div className={linkClass}>{linkDescription}</div>
      )}

      {sublinks && (
        <div
          className={`w-full space-y-4 bg-white/20 backdrop-blur-xl rounded-2xl dropdown-menu ${
            open && "shown"
          } `}>
          {sublinks.map(({ name, to }, i) => {
            return (
              <p key={i}>
                <Link href={to!}>{name}</Link>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileLinks;
