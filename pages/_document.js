import Document, { Html, Head, Main, NextScript } from "next/document";
import Manifest from "next-manifest/manifest";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/kds4gsr.css" />
          <link rel="stylesheet" href="../static/main.css" />
          <link rel="manifest" href="../static/manifest.json" />
          <link rel="icon" href="../static/images/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="Description"
            content="This is the new old-fashioned eating choice."
          />
          <meta name="theme-color" content="#df863a" />
        </Head>
        <body className="body">
          <Main />
          <NextScript />
        </body>

        <noscript>Your browser does not support JavaScript!</noscript>
      </Html>
    );
  }
}

export default MyDocument;
