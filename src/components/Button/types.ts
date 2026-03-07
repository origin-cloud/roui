export type ButtonType = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'link'
export type ButtonSize = 'small' | 'medium' | 'large'
export type NativeType = 'button' | 'submit' | 'reset'
export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  disabled?: boolean
  round?: boolean
  circle?: boolean
  nativeType?: NativeType
  autofocus?: boolean
  icon?: string
  loading?: boolean
}
export interface ButtonInstance {
  ref: HTMLButtonElement
}
