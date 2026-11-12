# Driving theory practice

Arabic, RTL driving-theory practice site. Hosted with GitHub Pages from main, root.

- `index.html`: all page sections and shared navigation
- `assets/app.js`: quizzes, search, and page interactions
- `assets/source.css`: Tailwind directives and custom styles
- `assets/styles.css`: compiled stylesheet used by the website

To rebuild CSS after edits:

```sh
npx --yes tailwindcss@3.4.17 -i ./assets/source.css -o ./assets/styles.css --content "./index.html,./assets/app.js" --minify
```

Progress is saved in the visitor's browser. The contact form is a demonstration and does not send or store submissions. Question content is provided as-is and has not been independently verified for current driving regulations.
