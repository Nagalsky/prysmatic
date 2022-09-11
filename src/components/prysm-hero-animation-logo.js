import {useEffect, useState} from 'react'
import Image from 'next/image'

const animatedLogos = [
  '/images/animated-logo-1.svg',
  '/images/animated-logo-2.svg',
  '/images/animated-logo-3.svg',
  '/images/animated-logo-4.svg',
]

export default function PrysmHeroAnimationLogo({...restProps}) {
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
  )
}
