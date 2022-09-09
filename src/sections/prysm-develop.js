import Image from 'next/image'

export default function PrysmDevelop({...restProps}) {
  return (
    <section
      className="py-[20px] md:py-[40px] text-center overflow-x-hidden overflow-y-auto"
      {...restProps}
    >
      <div className="container">
        <h3 className="uppercase font-subheading text-[20px] md:text-[26px] lg:text-[36px] text-purple-600 dark:text-sky-600 mb-[20px] md:mb-[40px] tracking-[1.08px] leading-[1.25]">
          DEVELOP
        </h3>

        <h2 className="text-[30px] md:text-[40px] lg:text-[48px] leading-[1.25] font-heading  mb-10 md:mb-16">
          Start coding with us!
          <span className="block font-sans text-[20px] md:text-[30px] lg:text-[40px]">
            Here&#39;s a glimpse into our code
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-5 md:gap-10 relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-5 md:px-0">
          <div>
            <Image
              src="/images/screenshot-left.png"
              alt="screenshot-left"
              width={100}
              height={100}
              quality={100}
              layout="responsive"
              className="w-full"
              priority={true}
            />
          </div>
          <div>
            <Image
              src="/images/screenshot-right.png"
              alt="screenshot-right"
              width={100}
              height={100}
              quality={100}
              layout="responsive"
              className="w-full"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
