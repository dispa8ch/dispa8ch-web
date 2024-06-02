import Header from "./_components/orders-header";
export default function OrdersLayout({ children: _children }: { children: React.ReactNode }) {
  return (
    <section className='w-full min-h-screen bg-white relative px-6 pt-6'>
      <Header />
      {/* {children} */}
    </section>
  );
}
