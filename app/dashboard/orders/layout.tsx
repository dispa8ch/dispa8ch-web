export default function OrdersLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='w-full h-full bg-white relative px-6 pt-6'>
      {children}
    </section>
  );
}