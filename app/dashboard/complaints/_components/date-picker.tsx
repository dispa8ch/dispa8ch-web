'use client'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/shadcn.utils"
import { format } from "date-fns"
import { CalendarDays } from "lucide-react"
import { useState } from "react"

/**
 * This component should show something like this [(Date-icon) 10/08/23 - 04/04/24].
 * Where the first date is where we should query the database starting from to the second date
 * @todo connect to the header component
 */
const toDate = new Date()
const DatePicker: React.FC<React.JSX.IntrinsicElements['div']> = () => {
  const [date, setDate] = useState<{
    from: Date | null,
    to: Date
  }>({
    from: null,
    to: toDate
  })

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarDays size={24} className="mr-2 h-4 w-4" />
          {date.from ? format(date.from, "LLL dd, y") : ''} -{" "}
          {format(date.to, "LLL dd, y")}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          onSelect={(_, selectedDay) => setDate((prev) => {
            prev.from = selectedDay;
            return prev;
          })}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker