import { IconProps } from './../../types'

const ArrowLeft = (props: IconProps) => {
  return (
    <svg id="Outline" viewBox="0 0 24 24" width="25" height="25">
      <path 
        d="M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"
        fill={props?.fill || '#FFFFFF'}
      />
    </svg>
  )
}

export default ArrowLeft