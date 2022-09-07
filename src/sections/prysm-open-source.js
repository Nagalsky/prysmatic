import React from 'react'
import Image from 'next/image'

export default function PrysmOpenSource({ ...restProps }) {
  return (
    <section
      className="pt-[20px] pb-14 md:pt-16 xl:pt-[105px] md:pb-[80px] text-center bg-[length:229px_423px] bg-[0_45%] lg:bg-[0_52%] bg-no-repeat bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcoAAANPCAMAAABtoG+sAAAATlBMVEUAAADSs0DTtEHVskDWtkDcuTnVtT/WtkDTs0HRs0LStEHSs0DVt0DSsT7ZrEPStEPSs0LRs0HVsUDQs0TSs0HTs0HTsELRs0LTs0LRtEGAa4V0AAAAGnRSTlMAYUcPGAcpL0+AcUAgEwtYbFQkHnZoOjJeTrgGnVMAAA5TSURBVHja7NxLbtwwEARQU441okYJqQn18f0vGi90gCaCAZzJq3UtCnoQl/0mL5cxHeHux54e4fKPKb3Fy2mIl5f5Fu7+Gub3cPnn2jH5vXZM/t3ikz+GHO/eM0qUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRPnXlNOV1NIUztbOcLfUNoWzzjVeLh2T1y2v8XLX5LZ1TM49Xzn3dL/+xitDncZoblO9h8t7qmO8XEu8fG+f4e5R2v6cycd8xj/cPQ/xcskdXQ/sKz2wKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJco45XLlXoclmsfntofLx7kt8fJW4uW9xSePaxvD5VvP5HFenzP5UXK8O31RliupbSWcraVw95xbiZfbHC+n3DG55vM5k0vP5LNvckfXA/tKDyxKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEuV/SFmubK3nZFdL4W76FofRzu9xGC098zDacmXvOVc41D1cvv2L5wprfMU4d0w+OiY/1p5zhR7YV3pgUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJE+Ye9OkqNFAijMEo5TUfLTNSkqlv3v9HJgAu4PgRCc/7n7+HigRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoc8r7ecN63OMb1zluH3u/53Ff8nhuQ9y+be2ZrygXJj/rT01eprzdvinH8/ZWxvhK2+N2WduYx7Un2fXJW5+2n5m8tTWPl6nkcZ8utB7YV3pgUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQ55cd5z/74SO/v3N/i+H3rH3lcxjz+rPnk21Bvcfy1lHzFbR3i9s+9XfjK45S3/9nLeWtbS3y19bjtrZULcb0QT1cmT+VnJpfpN0yu35S38x59vqX3NfRHHN+XfsvjvuXxs+aT34/2ma/Y13zFe70w+a1d+MrjlLeHf+Ur/StRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlDnlcN7S9iG+vS1xO/Y2xHfUNY/HKZ98lHbk8VovTG4lj7d2YXKf8rZ8U87njXWf41vqGLdDr3N8Ry15PLYlX1HakK+4MnloPY+PacnjMl1oPbCv9MCiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFH+Y6+OchQFojCMppBGKNuh0CrR/W90ehIWcGsSk4459/l7+OMRQIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFHGKU/H7e1xit710vZwfNvaKXzfaYvHU41PHod8D8f3NZ3icXmF22vX5HmJt//Y03GllhS+Ulu4bbWmjjh3xEvH5Lyk90xOv2Jy/v+n8hyObz1/8Vua4/GU45PHV72H4++1xVeMef4lT6Vv5cd8K1GiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUccr5uGdNc/S2VJ/heC11jse1dMRLx+RWt3icc8/kFur6f+WyxNv2QzkdN5TXFL65XMLtI7UpHrc1Hl/qEG73te7vmbznN00+r0u83bxgP+kFixIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaKMU47HPdowRu97aI9wfF7bGL6prfH4XC/xya98i6949kwuc7i97z2TtyXevn4o1+NabWv4Wk3hNuW6xuNaeuL45GdZnvG4Z/Kza/LS4nFe4m35ofw67tweX9H780hTOL5v6SsepyEe3/Iebq9Dvobjce2YfC09k2t88um1xFvfyo/6VqJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRLlX3buXYdNIAoCqEzwg7UdsL1r4P9/NI5Ek+7egkSxztRTDBxpt1uUKFGiRIkSJUqUKFGiRIkSJUqUe1P+8QTTnHjwJ/EE0y33BNN6PP7zJ5heY2Jyn3iC6eduTzD9Zl+2tNqWcKZE+VDqEi/XkigPU2JyakWqnFjRhhYvlyHxeR/K+5Z3u96j6a9tDpdP4+EeL7dLvHwu73D3tdZbuPwcW3zFbUpMPtX4X35dhni3c1d+012JEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRooxTnrd003qOZn5MXbh8PUzncN7tEC9fa2LyWOf4itTkMu40eRkSn/eh7LaMZemiWQ9lDJcfU+ni5dIS5ZqY3OoaLl8yk9eamTxkJg8Jkf/9gI1P/pE5YPu9Dtjjrc6JO2GId92VX3VXokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiXKv0DZb3m3ax/Nq2tzuHwaWx8vt0e8fK7xybe1PuMrlsTkZ9lp8usxxLvrh7JtKbW0QPLlqQ4tUa6J8pCYXIdprxX7TU50HbDfdMCiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRInyFzt1kOsoDAQBVLBIghnJmLgTuP9FJwsO0F5kk/9qXUJlntQoUaJEiRIlSpQoUaJEifIPUs5XjnLM2ZxTqelyiz6n8yiRL7c+Mrmf+RVbGZjcBybXkcmxDDzvQ7leaaWu6RylpbtnlDVfLlO+/Oj5yfPU53x5ZPLcvzZ5Geg6sL90YFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUecrnlTXmZzb7Ga90+V3jmc49ar787gOTH/2WLt+Ogcm30tLdf+++5ie3ZeB5H8q4UnqJRMbLW+/xpfIysmKJL5WXL02OkRXdgf2lA4sSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRPkHKduV6FPLpo6Uj623dGov+fKxRP7D21Lz5TI0eRuZPOXL25Lvxodyv7Ju857N7Yw1XX4fsafzipYvryU/+d76fc9P3vIr7qXmy68+8Jfrku82B/aXDixKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJ8j87dYzrNgwEARQSDEukA0j8IS3p/heNCx1gtwgQOG/qKYZ8wKJEiRIlSpQoUcYpn3fmfX5Gs7RE+X3uz3h5nIlyv8Ldo/UjXp4Sk4+6/Z3Jy1YSIh/K687ZpyuadfQtXN72esXLfURq+cltlBZfUXt8Ret74n0l88sl0XVgv+nAokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChR/oeU052971M4NVEetUzx9J4ol8Tk3IpMufwLk+uH8nHnPV6PaH7P4wiXn9v0CGcZa7x81PjkX2v/iU8+R3zFT22J9/XEL7cS714O7DcdWJQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRJlnHK5c+3XEs3R9jlcfk11Cee9T/Hyq6/xyVt/x1ekJvczviI1+SyJ530o5ztbP+dorqlv4XLb6xwv1xHq5SePsiYm9/iKqycmt3LGy6PEu5MD+00HFiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlCj/tFcHOQyCUBRFRQwttCgW0LD/jTZNXMD7kw7MfeMb8+MZACWUUOqU67VHP1Z1/uWCHL93t+qxG3ockn5yntMix3UznLwUy8nt1E8eUW9/7OVaiq3ISzHpbdM/bL9CXouGD1viEps51k/W22nK145+ZHXL3E85DpvLetyHHj+SfnIdrcrxZ+tZXk2Gk0Mz/OVnNIjwVt7prYQSSiihhBJKKKGEEkoooYQSSiihhBJKKKGEEkoooYQSSiihhBJKKKGEEkoooYQSSiihhBJKKKGEEkoooYQSSiihhBJKKKGEEkoooYQSSiihhBJKKKGE8g+U/trZD68uv/opx5+9e3lvt+txaPrJy5yqHNfNeT0uQ/9xppOfUW9/7I7dY9Pk2T02sdvsC9ycmm+DXyt9AAAAAElFTkSuQmCC')]"
      {...restProps}
    >
      <div className="container">
        <h2 className="font-heading text-[30px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[1.35] mb-[40px]">
          Free .
          <span className="bg-rose-500 inline-block px-1">Open-Source</span> .
          Globally
          <span className="xl:block">Accessible</span>
        </h2>
        <h3 className="font-lead text-[20px] sm:text-[26px] md:text-[30px] lg:text-[40px] mx-auto max-w-[920px] leading-[1.25] mb-[40px] md:mb-16">
          Prysm empowers developers to build a fairer financial world
        </h3>

        <div className="mb-[105px] w-[680px] mx-auto hidden md:block">
          <Image
            src="/images/open-source-banner.png"
            alt="open-source-banner"
            width={680}
            height={560}
            quality={100}
            layout="responsive"
            priority={true}
          />
        </div>

        <div className="mb-[60px] md:hidden">
          <Image
            src="/images/open-source-banner-mobile.png"
            alt="open-source-banner-mobile"
            height={100}
            width={100}
            quality={100}
            layout="responsive"
            objectFit="contain"
            priority={true}
          />
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
          <div className="border-t-[3px] md:border-l-[3px] md:border-t-0 border-dashed border-rose-500"></div>
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
