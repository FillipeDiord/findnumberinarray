import { HTMLAttributes } from 'react';

export type LabelProps = {
  children: string
} & HTMLAttributes<HTMLLabelElement>

export function Label({ children, ...props }: LabelProps) {
  return (
    <label {...props}>
      {children}
    </label>
  )
}