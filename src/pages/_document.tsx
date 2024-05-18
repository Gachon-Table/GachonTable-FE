import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}



// ServerStyleSheet 생성: ServerStyleSheet는 서버 측에서 스타일 컴포넌트를 수집하기 위해 사용됩니다. 
//sheet.collectStyles(<App {...props} />) 라인에서 ServerStyleSheet의 collectStyles 메서드를 호출하여 앱의 스타일을 수집합니다.

// 서버에서 스타일 적용: getInitialProps 메서드 내에서 ServerStyleSheet를 사용하여 서버 측에서 스타일을 적용합니다. 
//이렇게 하면 서버가 HTML을 생성하는 동안 스타일이 적용되어 서버에서 렌더링된 페이지가 클라이언트로 전달됩니다.

// getStyleElement 호출: sheet.getStyleElement()를 사용하여 수집된 스타일을 HTML 요소로 변환하여 반환합니다. 
//이렇게 하면 서버 측에서 렌더링된 스타일이 클라이언트에 적용됩니다.