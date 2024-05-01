import { FC, ReactNode } from "react"

type Props ={
  children?: ReactNode
}

/**
 * A complaint is a message from a user that has issues with the service a logistics company offered them.
 * @implementation It has the name of the user, the order id(so the company can see which order exactly), the location where the order was placed from,the exact date, the actual message explaining what went wrong and the exact time the user sent out the user sent out the complaint.
 * @implementation logistics companies can search for a certain keyword in our database so that they can get complaints from say a particular customer
 * @implementation logistics companies should be able to search complaints for a specific day, 3 days ago, the past week, 3 weeks ago, the past 2 months and the last year.
 */
const ComplaintsLayout: FC<Props> = ({children}) => {
  return (
    <section className="bg-transparent h-full p-3 " >
      {children}
    </section>
  )
}

export default ComplaintsLayout