import '@/styles/globals.css'
import Layout from '@/components/Layout'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-J0KNJYGTLH"/>
      <Script id='google-analytics' strategy='afterInteractive'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-J0KNJYGTLH');`}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
