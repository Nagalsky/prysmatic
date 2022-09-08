// import { useEffect } from 'react'
// import { useRouter } from 'next/router'
import Header from '../sections/header'
import Footer from '../sections/footer'

export default function Layout({ children, ...restProps }) {
  // const router = useRouter()

  // const routes = ['/']

  // const bodyClasses = ['bg-body-gradient', 'text-semi-white']

  // useEffect(() => {
  //   routes.includes(router.pathname) &&
  //     document.body.classList.add(...bodyClasses)
  // })

  return (
    <div className="min-h-screen flex flex-col" {...restProps}>
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  )
}
