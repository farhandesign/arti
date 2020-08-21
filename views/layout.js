module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Artilytics</title>
      <link rel="stylesheet" href="../public/css/main.css"> 
    </head>
    <body>
      <header>
        <nav>
          <div class="this">
            <h1>Hello</h1>
          </div>
        </nav>
      </header>

      ${content}
      
    </body>
    </html>
  `;
};
