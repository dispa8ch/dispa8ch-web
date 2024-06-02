import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type SelectOptions = 'Today' | 'Last-3-days' | 'Last-Week' | 'Last-2-weeks' | 'Last-Month' | 'Last-3-Months';

const selectOptions: SelectOptions[] = ['Today', "Last-3-days", 'Last-Week', 'Last-2-weeks', 'Last-Month', "Last-3-Months"]

/**
 * @todo test this component
 */
const PeriodSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Today" />
      </SelectTrigger>
      <SelectContent>
        {selectOptions.map(option => (
          <SelectItem value={option.toLowerCase()} >{option.replace(/-/g, ' ', )}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
};

export default PeriodSelect;