import { IconProps } from '../../types'

const LocationIcon = (props: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 56 80" fill="none">
    <path d="M28 0C12.52 0 0 12.52 0 28C0 49 28 80 28 80C28 80 56 49 56 28C56 12.52 43.48 0 28 0ZM28 38C22.48 38 18 33.52 18 28C18 22.48 22.48 18 28 18C33.52 18 38 22.48 38 28C38 33.52 33.52 38 28 38Z" fill={props?.fill || '#FFFFFF'}/>
    </svg>
  )
}

export default LocationIcon


