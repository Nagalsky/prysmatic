export function GalleryPagination({
  className,
  currentSlide,
  idx,
  ...restProps
}) {
  return <button {...restProps} className={className}></button>
}
