import {useState} from 'react'
import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const galleryData = [
  {
    id: 1,
    name: 'Preston Van Loon',
    role: 'co-founder',
    about:
      'Senior Go Engineer. Formerly Software Engineer at Google. JavaScript / Typescript, Node.js, Java, distributed systems design, and systems architecture. Formally trained tech interviewer from Amazon and Google.',
    twitterUrl: 'https://twitter.com/',
    gitHubUrl: 'https://github.com/',
    avatarUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Raul Jordan',
    role: 'co-founder',
    about:
      'Senior Go Engineer, Systems Architecture, and Ethereum protocol development. Thiel Fellow, computer science at Harvard University.',
    twitterUrl: 'https://twitter.com/',
    gitHubUrl: 'https://github.com/',
    avatarUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Terence Tsao',
    role: 'SENIOR GO ENGINEER',
    about:
      '#1 external contributor to Ethereum research specification. Software engineer at Riverbed and Cisco.',
    twitterUrl: 'https://twitter.com/',
    gitHubUrl: 'https://github.com/',
    avatarUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Nishant Das',
    role: 'SENIOR GO ENGINEER',
    about:
      'P2P networking specialist. Best bug hunter in Ethereum core development Experience in quantitative finance.',
    twitterUrl: 'https://twitter.com/',
    gitHubUrl: 'https://github.com/',
    avatarUrl: 'https://via.placeholder.com/150',
  },
]

export default function AboutMeetTeam({...restProps}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      mode: 'free-snap',
      slides: {
        origin: 'center',
        perView: 2,
        spacing: 36,
      },
      loop: true,
      breakpoints: {
        '(min-width: 540px)': {
          slides: {perView: 2.5, spacing: 64},
        },
        '(min-width: 768px)': {
          slides: {perView: 3.5, spacing: 64},
        },
        '(min-width: 1024px)': {
          slides: {perView: 4.5, spacing: 64},
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            slider.next()
          }, 30000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  return (
    <div className="text-center" {...restProps}>
      <h3 className="uppercase font-subheading text-[20px] md:text-[26px] lg:text-[36px] text-sky-600 mb-[20px] md:mb-[40px] tracking-[1.08px]">
        MEET THE TEAM
      </h3>

      <h2 className="text-[20px] md:text-[30px] lg:text-[40px] font-heading mb-8 md:mb-16 mx-auto max-w-[900px] leading-[1.3] text-white">
        A team of experts with in-depth understanding of blockchain technology
      </h2>

      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div ref={sliderRef} className="keen-slider text-semi-white">
          <div className="keen-slider__slide">1</div>
          <div className="keen-slider__slide">2</div>
          <div className="keen-slider__slide">3</div>
          <div className="keen-slider__slide">4</div>
          <div className="keen-slider__slide">5</div>
          <div className="keen-slider__slide">6</div>
        </div>
      </div>
    </div>
  )
}
