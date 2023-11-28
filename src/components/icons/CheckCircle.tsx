import { IconProps } from './../../types'

const CheckCircle = (props: IconProps) => {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path 
        d="M40 0C17.92 0 0 17.92 0 40C0 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 0 40 0ZM32 60L12 40L17.64 34.36L32 48.68L62.36 18.32L68 24L32 60Z" 
        fill={props?.fill || '#FFFFFF'}
      />
    </svg>
  )
}

export default CheckCircle