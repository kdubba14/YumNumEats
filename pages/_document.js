import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/kds4gsr.css"></link>
          <link rel="stylesheet" href="../static/main.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="Description" content="Put your description here." />
        </Head>
        <body className="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument