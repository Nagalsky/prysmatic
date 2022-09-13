import {useState, forwardRef} from 'react'
import {useKeenSlider} from 'keen-slider/react'
import Image from 'next/image'
import {TwitterSocial, GitHubSocial} from '../lib/icons'
import {GalleryControls} from '../components/gallery-controls'
import {GalleryPagination} from '../components/gallery-pagination'

import 'keen-slider/keen-slider.min.css'

const galleryData = [
  {
    id: 1,
    name: 'Preston Van Loon',
    role: 'co-founder',
    about:
      'Experienced in Golang, JavaScript / Typescript, Node.js, Java, distributed systems design, infrastructure, and systems architecture. Formerly Software Engineer at Google.',
    twitterUrl: 'https://twitter.com/preston_vanloon',
    gitHubUrl: 'https://github.com/prestonvanloon',
    avatarUrl: '/images/team/preston.jpeg',
  },
  {
    id: 2,
    name: 'Raul Jordan',
    role: 'co-founder',
    about:
      'Senior Go Engineer, Systems Architecture, and Ethereum protocol development. Thiel Fellow, computer science at Harvard University.',
    twitterUrl: 'https://twitter.com/rauljordaneth',
    gitHubUrl: 'https://github.com/rauljordan',
    avatarUrl: '/images/team/raul.png',
  },
  {
    id: 3,
    name: 'Terence Tsao',
    role: 'SENIOR GO ENGINEER',
    about:
      '#1 external contributor to Ethereum research specification. Software engineer at Riverbed and Cisco.',
    twitterUrl: 'https://twitter.com/terencechain',
    gitHubUrl: 'https://github.com/terencechain',
    avatarUrl: '/images/team/terence1.png',
  },
  {
    id: 4,
    name: 'Nishant Das',
    role: 'SENIOR GO ENGINEER',
    about:
      'P2P networking specialist. Best bug hunter in Ethereum core development Experience in quantitative finance.',
    twitterUrl: 'https://twitter.com/n1shantd',
    gitHubUrl: 'https://github.com/nisdas',
    avatarUrl: '/images/team/nishant1.jpeg',
  },
  {
    id: 5,
    name: 'Radosław Kapka',
    role: 'Go Software Engineer',
    about:
      'Experienced software engineer with a focus in full-stack web development and team lead working with .NET and Angular. Interested in software architecture.',
    gitHubUrl: 'https://github.com/rkapka',
    avatarUrl: '/images/team/radek.jpeg',
  },
  {
    id: 6,
    name: 'Clarin Dy',
    role: 'Head of People Operations',
    about:
      'People ops. Many years of experience in helping teams succeed operationally',
    gitHubUrl: 'https://github.com/',
    avatarUrl: '/images/team/Clarin.jpeg',
  },
  {
    id: 7,
    name: 'James He',
    role: 'SENIOR GO ENGINEER',
    about:
      'Previously from J.P.Morgan Chase & co. Full stack engineer with experience in UX and design',
    twitterUrl: 'https://twitter.com/hesatprylabs',
    gitHubUrl: 'https://github.com/james-prysm',
    avatarUrl: '/images/team/james.png',
  },
  {
    id: 8,
    name: 'Kasey Kirkham',
    role: 'SENIOR GO ENGINEER',
    about:
      'Dedicated to building large scale data platforms and distributed systems at startups with interesting missions, including Niantic, Planet Labs, Voxy and Topsy.',
    gitHubUrl: 'https://github.com/kasey',
    avatarUrl: '/images/team/kasey.png',
  },
  {
    id: 9,
    name: 'Taranpreet Singh',
    role: 'DevOps wizard',
    about:
      'Devops wizard, years of experience with cloud provisioning and infrastructure deployments',
    gitHubUrl: 'https://github.com/Taranpreet26311',
    avatarUrl: '/images/team/Taran.jpeg',
  },
  {
    id: 10,
    name: 'Mick B',
    role: 'Technical Content Lead',
    about:
      "Computer systems engineer by education, software developer and technical writer by profession. Excited to accelerate the world's transition to sustainable economics.",
    twitterUrl: 'https://twitter.com/symbolpunk',
    avatarUrl: '/images/team/mick.png',
  },
]

const AboutMeetTeam = forwardRef((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceMeetTeamRef] = useKeenSlider(
    {
      mode: 'free-snap',
      slides: {
        origin: 'center',
        perView: 1,
        spacing: 36,
      },
      loop: true,
      breakpoints: {
        '(min-width: 540px)': {
          slides: {perView: 1.5, spacing: 64},
        },
        '(min-width: 768px)': {
          slides: {perView: 2.5, spacing: 64},
        },
        '(min-width: 1199px)': {
          slides: {perView: 3.5, spacing: 64},
        },
        '(min-width: 1500px)': {
          slides: {perView: 4.5, spacing: 64},
        },
        '(min-width: 2000px)': {
          slides: {perView: 5.5, spacing: 64},
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
          }, 3000)
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
    <div className="text-center" {...props}>
      <h3
        className="uppercase font-subheading text-[20px] md:text-[26px] lg:text-[36px] text-sky-600 mb-[20px] md:mb-[40px] tracking-[1.08px] leading-[1.25]"
        ref={ref}
      >
        MEET THE TEAM
      </h3>

      <h2 className="text-[20px] md:text-[30px] lg:text-[40px] font-heading mb-8 md:mb-16 mx-auto max-w-[900px] leading-[1.3] text-white">
        A team of experts with in-depth understanding of blockchain technology
      </h2>

      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-5 sm:px-0">
        <div ref={sliderRef} className="keen-slider text-semi-white">
          {galleryData.map((item) => {
            return (
              <div
                className="keen-slider__slide rounded-xl border border-semi-white bg-gradient-to-b from-[#4b4f50] to-[#505454] p-5 cursor-grab"
                key={item.id}
              >
                <div className="mb-5">
                  <Image
                    src={item.avatarUrl}
                    alt={item.name}
                    width={150}
                    height={150}
                    quality={100}
                    priority={true}
                    className="rounded-full"
                  />
                </div>

                <div className="flex items-center justify-center flex-wrap gap-6 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:rounded-full [&>*]:text-white [&>*]:bg-red-500 [&>*]:w-6 [&>*]:h-6 mb-5">
                  {item.twitterUrl && (
                    <a
                      target="_blank"
                      href={item.twitterUrl}
                      rel="noopener noreferrer"
                    >
                      <TwitterSocial className="w-4 h-4" />
                    </a>
                  )}
                  {item.gitHubUrl && (
                    <a
                      target="_blank"
                      href={item.gitHubUrl}
                      rel="noopener noreferrer"
                    >
                      <GitHubSocial className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h4 className="text-[26px] md:text-[30px] font-heading mb-4 leading-[1.3]">
                  <a
                    target="_blank"
                    href={item.gitHubUrl}
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </h4>
                <p className="text-[18px] md:text-[25px] font-subheading mb-4 leading-[1.3] uppercase tracking-[0.75px]">
                  {item.role}
                </p>
                <p className="text-[20px] leading-[1.3]">{item.about}</p>
              </div>
            )
          })}
        </div>

        {loaded && instanceMeetTeamRef.current && (
          <>
            <div className="hidden md:flex items-center justify-center gap-10 mt-16 [&>*]:cursor-pointer [&>*]:rounded-full [&>*]:w-8 [&>*]:h-8 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:text-semi-white [&>*]:dark:text-dark-500 [&>*]:bg-purple-500 [&>*]:dark:bg-yellow-500 [&>*]:transition">
              <GalleryControls
                className="hover:bg-purple-600 dark:hover:bg-yellow-600"
                iconSize="w-5 h-5"
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceMeetTeamRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <GalleryControls
                className="hover:bg-purple-600 dark:hover:bg-yellow-600"
                iconSize="w-5 h-5"
                right
                onClick={(e) =>
                  e.stopPropagation() || instanceMeetTeamRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceMeetTeamRef.current.track.details.slides.length - 1
                }
              />
            </div>

            <div className="flex items-center justify-center flex-wrap gap-2 mt-10 lg:hidden">
              {[
                ...Array(
                  instanceMeetTeamRef.current.track.details.slides.length,
                ).keys(),
              ].map((idx) => {
                return (
                  <GalleryPagination
                    key={idx}
                    onClick={() => {
                      instanceMeetTeamRef.current?.moveToIdx(idx)
                    }}
                    currentSlide={currentSlide}
                    idx={idx}
                  />
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
})

AboutMeetTeam.displayName = 'AboutMeetTeam'

export default AboutMeetTeam
