/* eslint no-console: 0 */
import React from 'react'
import { renderToString } from 'react-dom/server'

export default function renderApp(req, res) {
  const initialComponent = (
    <div>
    </div>
  )

  const componentHTML = renderToString(initialComponent)

  const HTML = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Starter Pack</title>
      <script type="application/javascript">
        window.__INITIAL_STATE__ = {}
      </script>
      <body>
        <div id="app"></div>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
    </head>
  </html>`

  res.end(HTML)
}
