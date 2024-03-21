import { cn } from "@/lib/shadcn.utils";
import { ChevronRightIcon } from "lucide-react";

const BreadCrumb = ({ text }: { text: string }) => {
  return (
    <p className="text-sm font-Inter_Medium bg-gradient-to-r from-dispa8chRed-500 to-amber-500 text-transparent bg-clip-text " >{text}</p>
  )
}

type BreadCrumbsProps = {
  className?: string;
  crumbs: string[]
};

const BreadCrumbs = ({ className, crumbs }: BreadCrumbsProps) => {
  const length = crumbs.length
  return (
    <section className={cn("fit flex items-center justify-center gap-2", className || '')}>
      {crumbs.map((crumb, i) => {
        const Comp = () => <BreadCrumb text={crumb} />
        if (length != i + 1) return (<>
          <Comp />
          <ChevronRightIcon className="stroke-white/20 " size={20} />
        </>)
        else return <Comp />
      })}
    </section>
  )
};

export default BreadCrumbs;