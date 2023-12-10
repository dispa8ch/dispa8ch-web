type CreateButtonProps = {
  text?: string;
}
const CreateButton = (props?: CreateButtonProps) => {
  return (
    <button className='w-full h-12 mt-5 bg-dispa8chRed rounded-lg text-white font-Circular_Bold text-lg'>
      {props?.text || 'Create your account'}
    </button>
  );
};

export default CreateButton;
