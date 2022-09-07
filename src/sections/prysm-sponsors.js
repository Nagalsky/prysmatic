import React from 'react'

export default function PrysmSponsors({ ...restProps }) {
  return (
    <section className="py-[20px] md:py-[40px] text-center" {...restProps}>
      <div className="container">
        <h3 className="uppercase font-subheading text-[20px] md:text-[26px] lg:text-[36px] text-sky-600 mb-[20px] md:mb-[40px] tracking-[1.08px]">
          SPONSORS & GRANTS
        </h3>

        <h2 className="text-[20px] md:text-[30px] font-heading mb-10 md:mb-16 mx-auto max-w-[745px] leading-[1.3]">
          We&#39;re fully funded by grants and {'‘'}investors{'’'} in the future
          of finance. Meet our sponsors.
        </h2>
      </div>
    </section>
  )
}
