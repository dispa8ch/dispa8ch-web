import OrdersLayoutPage from "../_components/OrdersLayoutPage";

export default function OrdersLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='w-full min-h-screen bg-white relative ml-6'>
      <OrdersLayoutPage />
      {/* {children} */}
    </section>
  );
}
