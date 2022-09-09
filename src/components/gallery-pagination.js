export function GalleryPagination({
  className,
  currentSlide,
  idx,
  ...restProps
}) {
  return <button className={className} {...restProps}></button>
}
