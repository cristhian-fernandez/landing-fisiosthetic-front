import { IconProps } from '../../types'

const CellphoneIcon = (props: IconProps) => {
  return (
    <svg width="11" height="20" viewBox="0 0 14 20" fill="none">
      <path d="M11 0H3C1.34 0 0 1.21818 0 2.72727V17.2727C0 18.7818 1.34 20 3 20H11C12.66 20 14 18.7818 14 17.2727V2.72727C14 1.21818 12.66 0 11 0ZM9 18.1818H5V17.2727H9V18.1818ZM12.25 15.4545H1.75V2.72727H12.25V15.4545Z" fill={props?.fill || '#FFFFFF'}/>
    </svg>
  )
}

export default CellphoneIcon


