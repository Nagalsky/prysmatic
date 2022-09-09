export function GalleryPagination({
  className,
  currentSlide,
  idx,
  ...restProps
}) {
  return (
    <button
      {...restProps}
      className={`rounded-md h-2 bg-purple-500 dark:bg-yellow-500 transition origin-center ${
        currentSlide === idx ? 'opacity-1 w-6' : 'opacity-[0.4] w-4'
      }`}
    ></button>
  )
}
