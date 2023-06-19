import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head   />
      <link rel="icon" href="/v2.png" type="image/svg+xml" />
      <title> Vartex Aerospace</title>
      <body
    className="h-full overflow-x-hidden bg-default text-default text-base selection:bg-secondary selection:text-white"
  >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
