import Image from 'next/image'
import {Shield, ArrowsUpDown, Network, Code} from '../lib/icons'

export default function PrysmOpenSource({...restProps}) {
  return (
    <section
      className="overflow-x-hidden overflow-y-auto pt-[20px] pb-14 md:pt-16 xl:pt-[105px] md:pb-[80px] text-center bg-[length:229px_423px] bg-[0_45%] lg:bg-[0_52%] bg-no-repeat bg-[url('data:image/png;base64,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')]"
      {...restProps}
    >
      <div className="container">
        <h2 className="font-heading text-[30px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[1.35] mb-[40px]">
          Free .
          <span className="bg-purple-500 dark:bg-rose-500 inline-block px-1 text-semi-white">
            Open-Source
          </span>
          . Globally
          <span className="xl:block">Accessible</span>
        </h2>
        <h3 className="text-[20px] sm:text-[26px] md:text-[30px] lg:text-[40px] mx-auto max-w-[920px] leading-[1.25] mb-[40px] md:mb-16">
          Prysm empowers developers to build a fairer financial world
        </h3>

        <div className="relative mb-16 max-w-[145px] lg:max-w-[310px] mx-auto text-start">
          <div className="absolute -left-[36px] lg:-left-[63px] xl:-left-[83px] bottom-[120px] lg:bottom-[86px] w-[36px] lg:w-[63px] h-[296px] lg:h-[221px] text-purple-400 dark:text-blue-500">
            <svg
              className="hidden lg:block w-full"
              viewBox="0 0 66 224"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path
                d="M64.5 1.41357C56.1457 1.41357 48.1335 4.32406 42.2261 9.50475C36.3187 14.6854 33 21.712 33 29.0386V70.4761C33 81.466 29.6813 92.0058 23.7739 99.7768C17.8665 107.548 9.85432 111.914 1.5 111.914C9.85432 111.914 17.8665 116.279 23.7739 124.05C29.6813 131.821 33 142.361 33 153.351V194.789C33 202.115 36.3187 209.142 42.2261 214.322C48.1335 219.503 56.1457 222.414 64.5 222.414"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              className="block lg:hidden w-full"
              viewBox="0 0 39 299"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path
                d="M37.5 1.04541C32.7261 1.04541 28.1477 4.94361 24.7721 11.8825C21.3964 18.8213 19.5 28.2324 19.5 38.0454V93.5454C19.5 108.265 17.6036 122.382 14.2279 132.79C10.8523 143.198 6.2739 149.045 1.5 149.045C6.2739 149.045 10.8523 154.893 14.2279 165.301C17.6036 175.709 19.5 189.826 19.5 204.545V260.045C19.5 269.858 21.3964 279.27 24.7721 286.208C28.1477 293.147 32.7261 297.045 37.5 297.045"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="absolute -right-[35px] lg:-right-[70px] xl:-right-[90px] top-[112px] lg:top-[64px] w-[36px] lg:w-[70px] h-[503px] lg:h-[432px] text-purple-400 dark:text-blue-500">
            <svg
              className="hidden lg:block w-full"
              viewBox="0 0 73 435"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path
                d="M1.5 1.41357C10.7826 1.41357 19.685 7.10284 26.2487 17.2298C32.8125 27.3568 36.5 41.0919 36.5 55.4136V136.414C36.5 157.896 40.1875 178.499 46.7513 193.689C53.315 208.88 62.2174 217.414 71.5 217.414C62.2174 217.414 53.315 225.947 46.7513 241.138C40.1875 256.328 36.5 276.931 36.5 298.414V379.414C36.5 393.735 32.8125 407.47 26.2487 417.597C19.685 427.724 10.7826 433.414 1.5 433.414"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="block lg:hidden w-full"
              viewBox="0 0 39 506"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.04541C6.2739 1.04541 10.8523 7.66972 14.2279 19.4611C17.6036 31.2524 19.5 47.2449 19.5 63.9204V158.233C19.5 183.246 21.3964 207.235 24.7721 224.922C28.1477 242.609 32.7261 252.545 37.5 252.545C32.7261 252.545 28.1477 262.482 24.7721 280.169C21.3964 297.856 19.5 321.845 19.5 346.858V441.17C19.5 457.846 17.6036 473.838 14.2279 485.63C10.8523 497.421 6.2739 504.045 1.5 504.045"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className="text-center block bg-purple-500/90 dark:bg-green-500/90 text-white uppercase text-[10px] lg:text-[14px] font-subheading-medium absolute -left-[72px] lg:-left-[168px] xl:-left-[188px] bottom-[265px] lg:bottom-[182px] z-10 rounded-tr-md py-[2px] lg:py-[5px] px-[5px] lg:px-[33px]">
            node
          </span>

          <span className="text-center leading-[1.45] lg:leading-none block bg-purple-500/90 dark:bg-green-500/90 text-white uppercase text-[10px] lg:text-[14px] font-subheading-medium absolute -right-[102px] lg:-right-[276px] xl:-right-[296px] top-[320px] lg:top-[253px] z-10 rounded-tr-md py-[2px] lg:py-[5px] px-[5px] lg:px-[33px]">
            node <span className="block lg:inline">+</span>{' '}
            <span className="block lg:inline">validator</span>
          </span>

          <div className="px-4 md:px-5 py-5 md:py-2 rounded-xl bg-white/20 shadow-xl dark:drop-shadow-none dark:bg-[rgba(238,232,225,0.2)] space-y-2">
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-purple-500 dark:text-rose-400" />
            <h4 className="font-heading text-[20px] lg:text-[26px] leading-[1.25]">
              Validator
            </h4>
            <p className="tracking-[0.32px]">Prysm, Teku, Lighthouse, Nimbus</p>
          </div>

          <ArrowsUpDown className="text-purple-500 dark:text-sky-500 w-5 h-5 block my-3 mx-auto" />

          <div className="px-4 md:px-5 py-5 md:py-2 rounded-xl bg-white/20 shadow-xl dark:drop-shadow-none dark:bg-[rgba(238,232,225,0.2)] space-y-2">
            <Network className="w-8 h-8 md:w-10 md:h-10 stroke-purple-500 dark:stroke-rose-400" />
            <h4 className="font-heading text-[20px] lg:text-[26px] leading-[1.25]">
              Beacon <span className="block lg:inline">Node</span>
            </h4>
            <p className="tracking-[0.32px]">Prysm, Teku, Lighthouse, Nimbus</p>
          </div>

          <div className="my-3 relative before:absolute before:w-full before:-z-10 before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[3px] before:border-t-[3px] before:border-dashed before:border-purple-500/20 dark:before:border-rose-400/20">
            <p className="text-sm uppercase font-subheading-medium">
              Consensus layer
            </p>
            <ArrowsUpDown className="text-purple-500 dark:text-sky-500 w-5 h-5 block my-4 mx-auto" />
            <p className="text-sm uppercase font-subheading-medium">
              execution layer
            </p>
          </div>

          <div className="px-4 md:px-5 py-5 md:py-2 rounded-xl bg-white/20 shadow-xl dark:drop-shadow-none dark:bg-[rgba(238,232,225,0.2)] space-y-2">
            <Code className="w-8 h-8 md:w-10 md:h-10 stroke-purple-500 dark:stroke-rose-400" />
            <h4 className="font-heading text-[20px] lg:text-[26px] leading-[1.25]">
              Execution <span className="block lg:inline">Node</span>
            </h4>
            <p className="tracking-[0.32px]">Nethermind, Besu, Geth, Erigon</p>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_3px_1fr] gap-[40px] lg:gap-[80px]">
          <div className="flex flex-column items-center gap-[20px] justify-center flex-col">
            <div className="w-[90px] md:w-[150px]">
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
            <p className="sm:text-[20px] md:text-[25px] leading-[1.3]">
              Join other futuristic Ethereum validators using Prysm to secure
              value and reduce emissions by 99.9%
            </p>
          </div>
          <div className="border-t-[3px] md:border-l-[3px] md:border-t-0 border-dashed border-purple-500 dark:border-rose-500"></div>
          <div className="flex flex-column items-center gap-[20px] justify-center flex-col">
            <div className="w-[90px] md:w-[150px]">
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
            <p className="sm:text-[20px] md:text-[25px] leading-[1.3]">
              Leverage Prysm&#39;s incredible user experience to run nodes on
              the Ethereum network from anywhere in the world
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
