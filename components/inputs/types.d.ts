export {}

declare global {
  type NamedInputProps = {
    name: string;
  } & React.InputHTMLAttributes<HTMLInputElement>;  
}