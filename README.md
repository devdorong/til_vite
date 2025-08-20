# favicon 생성하기

- 추천사이트 (https://realfavicongenerator.net)
- `512px * 512px` / png 추천
- 생성된 파일을 `public 폴더`에 압축을 풀어준다.
- html 은 다음과 같음.

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <!-- Favicon 설정하기 -->
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>프로젝트</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```
