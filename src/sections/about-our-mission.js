import Image from 'next/image'

export default function AboutOurMission({ ...restProps }) {
  return (
    <section className="py-5 md:pt-16 text-center" {...restProps}>
      <div className="container">
        <h3 className="uppercase font-subheading text-[20px] md:text-[26px] lg:text-[36px] text-purple-600 dark:text-sky-600 mb-[20px] md:mb-[40px] tracking-[1.08px]">
          our mission
        </h3>

        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] font-heading mb-8 md:mb-16 mx-auto max-w-[800px] leading-[1.3]">
          Empower people to participate in the promise of Ethereum
        </h2>
      </div>
    </section>
  )
}
