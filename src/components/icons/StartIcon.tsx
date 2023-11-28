import { IconProps } from '../../types'

const StartIcon = (props: IconProps) => {
  return (
    <svg width="32" height="32" fill="none" style={props.style}>
      <path 
        d="M.727 14.998C7.515 12.873 12.848 7.53 15 .728c.303-.97 1.697-.97 2 0a21.982 21.982 0 0 0 14.273 14.27c.97.304.97 1.7 0 2.004C24.485 19.127 19.15 24.47 17 31.272c-.303.97-1.697.97-2 0A21.982 21.982 0 0 0 .727 17.001c-.97-.304-.97-1.7 0-2.004Z" 
        fill={props?.fill || '#FFFFFF'}>
      </path>
    </svg>
  )
}

export default StartIcon