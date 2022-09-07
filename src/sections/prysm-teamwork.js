import Image from 'next/image'
import { Discord } from '../lib/icons'

export default function PrysmTeamWork({ ...restProps }) {
  return (
    <section
      className="pt-5 pb-20 md:py-16 text-center relative"
      {...restProps}
    >
      <div className="container">
        <div className="grid md:grid-cols-[35%_1fr] gap-10 xl:gap-16 md:items-center">
          <div>
            <Image
              src="/images/teamwork-banner.png"
              alt="banner"
              width={100}
              height={100}
              quality={100}
              layout="responsive"
              className="w-full"
              objectFit="contain"
              priority={true}
            />
          </div>

          <div className="space-y-[20px] md:space-y-[40px]">
            <h3 className="uppercase font-subheading text-[20px] md:text-[26px] lg:text-[36px] text-sky-600 tracking-[1.08px]">
              THE BEST OF TEAMWORK
            </h3>

            <h2 className="text-[30px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[1.35] font-heading">
              Join our contributors
              <span className="block">
                Let{'’'}s
                <span className="inline-block bg-semi-white align-super w-[50px] lg:w-[90px] h-[7px] mx-3 relative top-[2px] md:top-0"></span>
                <span className="uppercase text-rose-500">CO-CREATE</span>
              </span>
            </h2>

            <p className="sm:text-[20px] md:text-[25px] leading-[1.3] tracking-[0.5px] md:!mb-4">
              Challenge, inspire, and collaborate with like-minded developers
              across the globe. We may be separated by location but we{'’'}re
              connected by a passion for a better and fairer world.
            </p>

            <button
              type="button"
              className="inline-flex items-center gap-1 border-2 rounded-[10px] text-dark-500 transition py-[4px] px-[20px] border-yellow-500 bg-yellow-500 font-heading hover:bg-yellow-600 hover:border-yellow-600"
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
