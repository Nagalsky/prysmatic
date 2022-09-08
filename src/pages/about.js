import Head from 'next/head'
import AboutOurMission from '../sections/about-our-mission'
import AboutOurVision from '../sections/about-our-vision'
import AboutMeetTeam from '../sections/about-meet-team'
import PrysmTeamWork from '../sections/prysm-teamwork'

export default function Home() {
  return (
    <>
      <Head>
        <title>Prysmatic about us page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutOurMission />

      <AboutOurVision />

      <section className="py-6 md:py-16 bg-body-gradient dark:bg-none">
        <div className="container">
          <AboutMeetTeam />

          <PrysmTeamWork isNested />
        </div>
      </section>
    </>
  )
}
