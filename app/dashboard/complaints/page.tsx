import Complaint from "./_components/complaint";
import Header from "./_components/header";
import { complaints } from "./complaints.schema";
const Complaints: React.FC = () => {
  return (
    <>
      <Header />
      <section className='w-full mt-4 space-y-4'>
        {complaints.map((complaint, i) => (
          <Complaint
            {...complaint}
            key={i}
          />
        ))}
      </section>
    </>
  );
};

export default Complaints;
