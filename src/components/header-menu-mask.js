import {useLockBodyScroll} from '../hooks/use-lock-body-scroll'

export function HeaderMenuMask({...restProps}) {
  useLockBodyScroll()
  return (
    <div
      className="fixed h-full w-full left-0 top-0 bg-dark-500/50 z-30 lg:hidden"
      {...restProps}
    ></div>
  )
}
