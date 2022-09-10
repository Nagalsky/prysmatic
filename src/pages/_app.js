import '../styles/globals.css'
import Layout from '../sections/layout'
import {ThemeProvider} from 'next-themes'

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
