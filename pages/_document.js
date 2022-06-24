// noinspection HtmlRequiredTitleElement

import Document, {Head, Html, Main, NextScript} from 'next/document';
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          {/* Do NOT add title tag in this file*/}

          {/*Google font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet" />
          {/*Google font end*/}


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
