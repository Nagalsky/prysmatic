import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="text-base antialiased dark:bg-body-gradient dark:text-semi-white bg-semi-white text-dark-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
