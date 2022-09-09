import {ArrowLeft, ArrowRight} from '../lib/icons'

export function GalleryControls({
  className,
  iconSize,
  left,
  right,
  ...restProps
}) {
  return (
    <div className={className} {...restProps}>
      {left && <ArrowLeft className={iconSize} />}
      {right && <ArrowRight className={iconSize} />}
    </div>
  )
}
