import {ArrowLeft, ArrowRight} from '../lib/icons'

export function GalleryControls({
  className,
  iconSize,
  left,
  right,
  disabled,
  ...restProps
}) {
  return (
    <button className={className} disabled={disabled} {...restProps}>
      {left && <ArrowLeft className={iconSize} />}
      {right && <ArrowRight className={iconSize} />}
    </button>
  )
}
