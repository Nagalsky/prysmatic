import {forwardRef} from 'react'
import Image from 'next/image'
import {Decentralized, Permission, Document} from '../lib/icons'

const AboutOurMission = forwardRef((props, ref) => (
  <section className="py-5 md:pt-16 md:pb-8 text-center" {...props}>
    <div className="container">
      <h3
        className="uppercase font-subheading text-[20px] md:text-[26px] lg:text-[36px] text-purple-600 dark:text-sky-600 mb-[20px] md:mb-[40px] tracking-[1.08px] leading-[1.25]"
        ref={ref}
      >
        our mission
      </h3>

      <h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-heading mb-8 md:mb-16 mx-auto max-w-[800px] leading-[1.3]">
        Empower people to participate in the promise of Ethereum
      </h1>

      <div className="grid md:grid-cols-3 gap-8 xl:gap-16 xxl:gap-[110px] items-start">
        <div className="flex flex-col justify-center gap-5">
          <div className="w-[90px] lg:w-[150px] mx-auto">
            <Image
              src="/images/futuristic-ethereum.png"
              alt="futuristic-ethereum"
              width={100}
              height={100}
              quality={100}
              layout="responsive"
              priority={true}
            />
          </div>
          <p className="md:text-[20px] lg:text-[25px] leading-[1.3]">
            Enhance Ethereum&#39;s scalability and usability via dependable
            technical infrastructure
          </p>
        </div>

        <div className="flex flex-col justify-center gap-5">
          <div className="w-[90px] lg:w-[150px] mx-auto">
            <Image
              src="/images/psysm-infrastructure.png"
              alt="psysm-infrastructure"
              width={100}
              height={100}
              quality={100}
              layout="responsive"
              priority={true}
            />
          </div>
          <p className="md:text-[20px] lg:text-[25px] leading-[1.3]">
            Ensure an all-time, 100% free access to Prysm and other
            infrastructure
          </p>
        </div>

        <div className="flex flex-col justify-center gap-5">
          <div className="w-[90px] lg:w-[150px] mx-auto">
            <Image
              src="/images/prysms.png"
              alt="prysms"
              width={100}
              height={100}
              quality={100}
              layout="responsive"
              priority={true}
            />
          </div>
          <p className="md:text-[20px] lg:text-[25px] leading-[1.3]">
            Remain self-governing and independent of the Ethereum Foundation,
            only funded by grants
          </p>
        </div>
      </div>

      <div className="my-8 md:my-16 border-t-[3px] border-dashed border-purple-400 dark:border-purple-500 mx-5 md:mx-16"></div>

      <div className="grid md:grid-cols-[1fr_380px] gap-10 md:gap-8 md:items-center xxl:items-start">
        <div className="md:text-left space-y-[40px]">
          <h2 className="font-heading text-[30px] sm:text-[26px] lg:text-[40px] xl:text-[48px] leading-[1.6] md:leading-[1.4]">
            Why{' '}
            <span className="text-purple-500 dark:text-sky-500 uppercase font-heading-bold">
              ETHEREUM?
            </span>
          </h2>
          <div className="space-y-5 md:text-[20px] lg:text-[25px] tracking-[0.5] leading-[1.3]">
            <p>
              Rated as one of the fastest-growing public blockchain technology
              in the world, Ethereum has distinguished itself as a major
              stakeholder in the global pursuit of Decentralized Finance
              (DE-Fi). By focusing on strong security and building a cohesive
              community, Ethereum continues to win users&#39; trust.
            </p>
            <p>
              Ethereum is famous for its huge and highly receptive community of
              visionaries with an unwavering commitment to building a fair and
              censorship-resistant finance.{' '}
            </p>
          </div>

          <h3 className="font-heading text-[20px] md:text-[30px] leading-[1.3]">
            We believe in Ethereum because it is more than just another public
            blockchain, it is a movement for a better world.
          </h3>
        </div>

        <div className="space-y-6 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:gap-4 [&>*]:md:gap-6 [&>*]:md:text-[20px] [&>*]:lg:text-[25px] [&>*]:leading-[1.3] [&>*]:tracking-[0.5]">
          <div>
            <div className="text-rose-500 dark:text-sky-600">
              <Decentralized className="w-12 sm:w-16 h-12 sm:h-16 mx-auto" />
            </div>
            <p>Global, decentralized organizations </p>
          </div>

          <div>
            <div className="text-rose-500 dark:text-sky-600">
              <Permission className="w-12 sm:w-16 h-12 sm:h-16 mx-auto" />
            </div>
            <p>Permissionless financial applications</p>
          </div>

          <div>
            <div className="text-rose-500 dark:text-sky-600">
              <Document className="w-12 sm:w-16 h-12 sm:h-16 mx-auto" />
            </div>
            <p>Non-reserve backed, Stable-value currency </p>
          </div>
        </div>
      </div>
    </div>
  </section>
))

AboutOurMission.displayName = 'AboutOurMission'

export default AboutOurMission
