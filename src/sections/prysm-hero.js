import {useEffect, useState} from 'react'
import Image from 'next/image'
import {ArrowRight, GitHub} from '../lib/icons'

export default function PrysmHero({...restProps}) {
  const animatedLogos = [
    '/images/animated-logo-1.svg',
    '/images/animated-logo-2.svg',
    '/images/animated-logo-3.svg',
    '/images/animated-logo-4.svg',
  ]

  const [activeLogo, setActiveLogo] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(activeLogo + 1)
      if (activeLogo === animatedLogos.length - 1) {
        setActiveLogo(0)
      }
    }, 1600)
    return () => clearInterval(interval)
  }, [activeLogo, animatedLogos.length])

  return (
    <section
      className="pt-[20px] pb-[52px] sm:pt-[40px] md:pt-[60px] lg:pt-[120px] xl:pt-[200px] md:pb-[60px] lg:pb-[110px] relative text-center md:text-start overflow-x-hidden"
      {...restProps}
    >
      <div className="container relative z-10 grid xl:grid-cols-[660px_1fr] lg:items-center gap-5 xl:gap-20">
        <div className="relative hue-rotate-180 invert dark:hue-rotate-0 dark:invert-0 xl:scale-[1.2] xl:translate-x-[60px] 2xl:scale-100 2xl:translate-x-0 xl:order-last -mx-[15px] sm:mx-auto sm:w-[400px] md:w-full">
          <Image
            src="/images/index-hero-banners.png"
            alt="hero-banners"
            width={419}
            height={390}
            quality={100}
            layout="responsive"
            priority={true}
          />
          <div className="absolute ml-[2.5%] sm:ml-0 top-[24%] sm:top-[90px] md:top-[167px] lg:top-[199px] xl:top-[98px] 2xl:top-[144px] left-[50%] sm:left-[142px] md:left-[263px] lg:left-[313px] xl:left-[153px] 2xl:left-[225px] w-[34%] sm:w-[136px] md:w-[249px] lg:w-[297px] xl:w-[144px] 2xl:w-[211px] sm:h-[245px] z-10 -translate-x-1/2 sm:translate-x-0">
            <Image
              src={animatedLogos[activeLogo]}
              alt="hero-banners"
              width={100}
              height={100}
              quality={100}
              layout="responsive"
              priority={true}
            />
          </div>
        </div>

        <div className="md:max-w-[660px] xl:order-first">
          <h1 className="font-heading text-[40px] sm:text-[50px] lg:text-[65px] xl:text-[70px] mb-[20px] md:mb-[40px] leading-none">
            Prysm
          </h1>
          <h2 className="font-heading text-[30px] sm:text-[26px] lg:text-[40px] xl:text-[48px] leading-[1.6] md:leading-[1.4] mb-[20px] md:mb-[40px]">
            Run NODE
            <span className="inline-block bg-dark-500 dark:bg-semi-white align-super w-[50px] lg:w-[90px] h-[7px] ml-2 relative top-[2px] md:top-0"></span>
            <span className="block">
              and use{' '}
              <span className="text-purple-500 dark:text-sky-500 uppercase">
                ETH <span className="block sm:inline">SUSTAINABLY</span>
              </span>
            </span>
          </h2>
          <p className="md:text-[20px] lg:text-[25px] mb-[40px] leading-[1.4] tracking-[0.5px]">
            Use Prysm to easily and sustainably run nodes on the Ethereum
            blockchain
          </p>

          <div className="flex flex-col sm:flex-wrap sm:flex-row items-center gap-6 sm:justify-start">
            <a
              target="_blank"
              href="https://github.com/"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 rounded-[10px] text-semi-white dark:text-dark-500 transition py-[6px] px-[20px] font-heading bg-purple-500 hover:bg-purple-600 dark:bg-yellow-500"
            >
              <GitHub className="w-8 h-8" />
              Install Prysm
            </a>

            <a
              target="_blank"
              href="https://github.com/"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 transition font-heading text-purple-500 hover:text-purple-600 dark:text-yellow-500 dark:hover:text-yellow-600"
            >
              Read Our Docs
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
