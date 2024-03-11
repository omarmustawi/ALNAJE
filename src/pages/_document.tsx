/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>شركة الناجي</title>
        <link rel="icon" href="/alnaje.ico" />
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/alnaje.ico"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="16x16"
          href="/alnaje.ico"
        />
        <meta
          name="description"
          content="الناجي هي من الشركات الرائدة في مجال إنتاج وتوريد الكونكريت الجاهز و تأسست الشركة بهدف تلبية احتياجات السوق المتزايدة لمواد البناء عالية
          الجودة والمستدامة ."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
