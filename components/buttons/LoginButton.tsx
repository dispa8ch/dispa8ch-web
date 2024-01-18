type LoginButtonProps = {
  text: string;
}
const LoginButton = (props?: LoginButtonProps) => {
  return (
    <button className='w-full h-12 mt-5 bg-dispa8chRed-500 rounded-lg text-white font-Inter_Bold text-lg'>
      {props?.text}
    </button>
  );
};

export default LoginButton;
