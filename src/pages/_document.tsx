import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500&f[]=author@500,600,700&f[]=general-sans@500,600,700&f[]=outfit@800,500,700&f[]=beVietnam-pro@600,900,700,800&f[]=excon@900,700,500&f[]=chillax@600,700&f[]=nippo@700&f[]=work-sans@800,600,700,601&f[]=red-hat-display@800,900,700&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Chakra+Petch:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&family=Gemunu+Libre&family=Josefin+Sans&family=Jost:wght@500&family=Lexend:wght@400;500;800&family=Manrope:wght@400;500;600;700;800&family=Noto+Sans+KR&family=Open+Sans:wght@400;500;600&family=Oxygen&family=Plus+Jakarta+Sans:wght@800&family=Poppins:ital,wght@0,400;0,500;0,600;1,400&family=Prompt&family=Questrial&family=Quicksand:wght@600&family=Roboto+Slab:wght@400;500&family=Tilt+Warp&family=Titillium+Web&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
