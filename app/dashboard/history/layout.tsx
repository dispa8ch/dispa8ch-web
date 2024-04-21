import HistoryLayoutPage from "../_components/HistoryLayoutPage";

export default function history({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full min-h-screen bg-white relative ml-6'>
      <HistoryLayoutPage />
      {children}
    </div>
  );
}
