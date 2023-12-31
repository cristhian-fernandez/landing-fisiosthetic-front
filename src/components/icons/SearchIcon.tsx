import { IconProps } from './../../types'

const SearchIcon = (props: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" width="25" height="25">
      <path 
        d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"
        fill={props?.fill || '#273b49'}
      />
    </svg>
  )
}

export default SearchIcon
