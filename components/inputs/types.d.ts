export {}

declare global {
  type NamedInputProps = {
    name: string;
    validationError?: string;
    cName?:string
    onChange?: (e:any)=> void;
  } & React.InputHTMLAttributes<HTMLInputElement>;  
}