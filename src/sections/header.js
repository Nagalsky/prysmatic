import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import {
  Dark,
  Light,
  ArrowRight,
  GitHub,
  MobileMenuOpen,
  MobileMenuClose,
} from '../lib/icons'
import { HeaderLogo } from '../components/header-logo'

export default function Header({ ...restProps }) {
  const router = useRouter()

  const [isOpened, setIsOpened] = useState(false)

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <button role="button" onClick={() => setTheme('light')}>
          <Light className="w-6 h-6 cursor-pointer" />
        </button>
      )
    } else {
      return (
        <button role="button" onClick={() => setTheme('dark')}>
          <Dark className="w-6 h-6 cursor-pointer" />
        </button>
      )
    }
  }

  return (
    <header
      className="bg-semi-white dark:bg-dark-500 text-dark-500 dark:text-semi-white text-base font-heading shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] py-[20px] lg:py-[26px] relative shrink-0"
      {...restProps}
    >
      <div className="container flex items-center gap-4 lg:gap-16 xxl:gap-[268px]">
        <HeaderLogo />

        <div className="flex gap-6 items-center lg:hidden ml-auto">
          <div className="flex">{renderThemeChanger()}</div>

          <button
            onClick={() => setIsOpened(!isOpened)}
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-yellow-600 bg-yellow-500 w-8 h-8 text-dark-500"
          >
            {isOpened ? (
              <MobileMenuClose className="w-[32px] h-[32px]" />
            ) : (
              <MobileMenuOpen className="w-[32px] h-[32px]" />
            )}
          </button>
        </div>

        <div
          className={`${
            isOpened ? 'flex' : 'hidden'
          } grow flex-col items-start lg:flex lg:flex-row lg:items-center lg:justify-end absolute lg:static top-full bg-body-gradient lg:bg-none w-full lg:w-auto z-[50] left-0 p-[20px] lg:p-0 max-h-[calc(100vh_-_72px)] overflow-auto shadow-[0_4px_4px_0_rgba(0,0,0,0.25)_inset] lg:shadow-none`}
        >
          <nav className="flex flex-col lg:flex-row [&>*]:py-[12px] lg:[&>*]:py-0 gap-4 lg:gap-8 xl:gap-[62px] w-full lg:w-auto [&>*]:transition [&>*]:flex lg:[&>*]:inline-flex [&>*]:justify-between [&>*]:items-center grow">
            <Link href="/">
              <a
                onClick={() => setIsOpened(false)}
                className={`${
                  router.asPath === '/'
                    ? 'lg:border-b-dark-500 lg:dark:border-b-semi-white lg:border-b'
                    : ''
                } dark:hover:text-white`}
              >
                Prysm
                <ArrowRight className="w-8 h-8 lg:hidden" />
              </a>
            </Link>
            <Link href="/about">
              <a
                onClick={() => setIsOpened(false)}
                className={`${
                  router.asPath === '/about'
                    ? 'lg:border-b-semi-white lg:border-b'
                    : ''
                } dark:hover:text-white`}
              >
                About Us
                <ArrowRight className="w-8 h-8 lg:hidden" />
              </a>
            </Link>
            <Link href="/careers">
              <a
                onClick={() => setIsOpened(false)}
                className={`${
                  router.asPath === '/careers'
                    ? 'lg:border-b-semi-white lg:border-b'
                    : ''
                } dark:hover:text-white`}
              >
                Careers
                <ArrowRight className="w-8 h-8 lg:hidden" />
              </a>
            </Link>
            <Link href="/docs">
              <a
                onClick={() => setIsOpened(false)}
                className={`${
                  router.asPath === '/docs'
                    ? 'lg:border-b-semi-white lg:border-b'
                    : ''
                } dark:hover:text-white`}
              >
                Docs
                <ArrowRight className="w-8 h-8 lg:hidden" />
              </a>
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex items-center gap-4 border-2 border-purple-500 dark:border-yellow-500 rounded-[10px] text-purple-500 dark:text-yellow-500 transition py-[4px] px-[20px] hover:text-white hover:bg-purple-500 dark:hover:text-dark-500 dark:hover:bg-yellow-500 mx-auto lg:mx-0 font-heading mt-[20px] lg:mt-0 lg:ml-4"
          >
            <GitHub className="w-8 h-8" />
            Install Prysm
          </button>

          <div className="hidden lg:flex ml-8">{renderThemeChanger()}</div>
        </div>
      </div>
    </header>
  )
}
