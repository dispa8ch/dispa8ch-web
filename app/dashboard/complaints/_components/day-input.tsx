import { Input } from "@/components/ui/input"

const DayInput: React.FC<React.JSX.IntrinsicElements['input']> = ({ className, ...rest }) => {
  return (
    <Input {...rest} type="text" placeholder="Search keywords" />
  )
}

export default DayInput