import { CheckedInput } from "@/components/inputs";

const CurrentTab = () => {
  return (
    <section className="w-full " >
      {/* First row */}
      <div className="w-full grid grid-cols-13-gapped place-content-center">
        <CheckedInput onCheck={(checked) => console.log(checked)} />
        {new Array(12).fill(1).map(_ => (
          <h1>C.Name</h1>
        ))}
      </div>
    </section>
  )
}

export default CurrentTab