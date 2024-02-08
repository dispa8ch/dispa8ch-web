type LoginButtonProps = {
  text: string;
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const LoginButton = (props: LoginButtonProps) => {
  return (
    <button className='w-full h-12 mt-5 bg-dispa8chRed-500 rounded-lg text-white font-Inter_Bold text-lg' onClick={props.handleSubmit}>
      {props?.text}
    </button>
  );
};

export default LoginButton;
