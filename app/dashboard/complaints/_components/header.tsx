import DatePicker from "./date-picker";
import DayInput from "./day-input";
import PeriodSelect from "./period-select";
import SearchButton from "./search-button";

const Header: React.FC = () => {
  return (
    <section className="w-full pt-2 flex items-center gap-4 font-Inter" >
      <h1 className="font-Inter_Bold text-2xl text-[#171717]" >Complaints</h1>
      <form className="fit ml-auto flex items-center gap-2">
        <div className="fit flex items-center gap-2">
          <DayInput />
          <SearchButton />
        </div>
        <DatePicker />
        <PeriodSelect />
      </form>
    </section>
  )
}

export default Header;