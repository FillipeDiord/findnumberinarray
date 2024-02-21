import { HTMLAttributes } from 'react';

export type ButtonProps = {
  children: string;
} & HTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props}>
      {children}
    </button>
  )
}