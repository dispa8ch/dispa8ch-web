import { BaseButton } from "@/components/buttons"
import { BaseButtonProps } from "@/components/buttons/BaseButton"
import { cn } from "@/lib/shadcn.utils"
import { SearchIcon } from "lucide-react"

const SearchButton: React.FC<BaseButtonProps> = ({children, className, ...rest}) => {
  return (
    <BaseButton {...rest} className={cn('w-fit px-2', className || '')} >
      <SearchIcon stroke="white" size={22} />
    </BaseButton>
  )
}

export default SearchButton