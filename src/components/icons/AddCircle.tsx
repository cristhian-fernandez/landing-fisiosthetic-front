import { IconProps } from '../../types'

const AddCircle = (props: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
      <path d="M7 13.5C10.5899 13.5 13.5 10.5899 13.5 7C13.5 3.41015 10.5899 0.5 7 0.5C3.41015 0.5 0.5 3.41015 0.5 7C0.5 10.5899 3.41015 13.5 7 13.5Z" stroke={props.fill || "#000001"} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 4V10" stroke={props.fill || "#000001"} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 7H10" stroke={props.fill || "#000001"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export default AddCircle