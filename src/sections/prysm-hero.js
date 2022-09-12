import PrysmHeroAnimationLogo from '../components/prysm-hero-animation-logo'
import {ArrowRight, GitHub} from '../lib/icons'

export default function PrysmHero({...restProps}) {
  return (
    <section
      className="pt-[20px] pb-[52px] sm:pt-[40px] md:pt-[60px] lg:pt-[120px] xl:pt-[200px] md:pb-[60px] lg:pb-[110px] relative text-center md:text-start overflow-x-hidden"
      {...restProps}
    >
      <div className="container relative z-10 grid xl:grid-cols-[660px_1fr] lg:items-center gap-5 xl:gap-20">
        <PrysmHeroAnimationLogo />

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
              href="https://docs.prylabs.network/docs/getting-started"
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
