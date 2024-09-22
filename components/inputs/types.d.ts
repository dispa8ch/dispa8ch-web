export {}

declare global {
  type NamedInputProps = {
    name: string;
    validationError?: string;
    onChange?: (e:any)=> void;
  } & React.InputHTMLAttributes<HTMLInputElement>;  
}