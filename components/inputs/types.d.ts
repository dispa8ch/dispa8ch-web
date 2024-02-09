export {}

declare global {
  type NamedInputProps = {
    name: string;
    onChange?: (e:any)=> void;
  } & React.InputHTMLAttributes<HTMLInputElement>;  
}