type LoginButtonProps = {
  text: string;
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};
const LoginButton = (props: LoginButtonProps) => {
  return (
    <button
      className={`w-full h-12 mt-5  rounded-lg text-white font-Inter_Bold text-lg ${props.disabled ? 'bg-red-300 cursor-wait' : 'bg-dispa8chRed-500' }`}
      onClick={props.handleSubmit}
      disabled={props.disabled}
    >
      {props?.text}
    </button>
  );
};

export default LoginButton;
