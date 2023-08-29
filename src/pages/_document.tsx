import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
