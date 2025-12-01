const fs = require('fs');
const path = require('path');

const distDraftDir = path.join(__dirname, '..', 'dist', 'draft');
const indexPath = path.join(distDraftDir, 'index.html');

fs.mkdirSync(distDraftDir, { recursive: true });

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="5; url=/" />
    <meta name="robots" content="noindex" />
    <title>Redirecting...</title>
    <link rel="canonical" href="/" />
  </head>
  <body>
    <p>This draft link has moved. Redirecting to <a href="/">/</a> in 5 seconds...</p>
    <script>
      setTimeout(function () {
        window.location.replace('/');
      }, 5000);
    </script>
  </body>
</html>
`;

fs.writeFileSync(indexPath, html);
