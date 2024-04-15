import OrdersLayoutPage from "../_components/OrdersLayoutPage";

export default function orders({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full min-h-screen bg-white relative ml-6'>
      <OrdersLayoutPage />
      {children}
    </div>
  );
}
