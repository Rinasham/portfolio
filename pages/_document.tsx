import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&family=Rubik+Dirt&display=swap"
            rel="stylesheet"
          />
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}

export default MyDocument;
