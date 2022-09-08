import Image from 'next/image'
import {Discord} from '../lib/icons'

export default function PrysmTeamWork({isNested, ...restProps}) {
  return (
    <section
      className={`${
        isNested ? 'md:py-24' : 'md:py-16'
      } pt-5 pb-20 text-center relative`}
      {...restProps}
    >
      <div className={`${!isNested ? 'container' : ''}`}>
        <div className="grid md:grid-cols-[35%_1fr] gap-10 xl:gap-16 md:items-center">
          <div>
            <Image
              src="/images/teamwork-banner.png"
              alt="banner"
              width={100}
              height={100}
              quality={100}
              layout="responsive"
              className="w-full hue-rotate-180 invert dark:hue-rotate-0 dark:invert-0"
              objectFit="contain"
              priority={true}
            />
          </div>

          <div className="space-y-[20px] md:space-y-[40px]">
            <h3
              className={`${
                !isNested ? 'text-purple-600 dark:text-sky-600' : ''
              } uppercase font-subheading text-[20px] md:text-[26px] lg:text-[36px] text-sky-600 tracking-[1.08px]`}
            >
              THE BEST OF TEAMWORK
            </h3>

            <h2
              className={`${
                isNested ? 'text-white' : ''
              } text-[30px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[1.35] font-heading`}
            >
              Join our contributors
              <span className="block">
                Let&#39;s
                <span
                  className={`${
                    isNested ? 'bg-white' : 'bg-dark-500 dark:bg-semi-white'
                  } inline-block align-super w-[50px] lg:w-[90px] h-[7px] mx-3 relative top-[2px] md:top-0`}
                ></span>
                <span className="uppercase text-purple-500 dark:text-rose-500">
                  CO-CREATE
                </span>
              </span>
            </h2>

            <p
              className={`${
                isNested ? 'text-white' : ''
              } sm:text-[20px] md:text-[25px] leading-[1.3] tracking-[0.5px] md:!mb-4`}
            >
              Challenge, inspire, and collaborate with like-minded developers
              across the globe. We may be separated by location but we&#39;re
              connected by a passion for a better and fairer world.
            </p>

            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-[10px] text-semi-white dark:text-dark-500 transition py-[6px] px-[20px] bg-purple-500 hover:bg-purple-600 dark:bg-yellow-500 font-heading dark:hover:bg-yellow-600"
            >
              <Discord className="w-8 h-8" />
              Join Our Discord
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
