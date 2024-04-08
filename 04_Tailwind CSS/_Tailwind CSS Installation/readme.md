npm init
name : tailwind_demo
npm i vite

<!-- https://tailwindcss.com/docs/installation/using-postcss -->

# 1.Install Tailwind CSS

<!-- Install tailwindcss and its peer dependencies via npm, and create your tailwind.config.js file. -->

terimnal{
npm install -D tailwindcss postcss autoprefixer <!-- -D is for Dev dependencies -->
npx tailwindcss init
}

# 2.Add Tailwind to your PostCSS configuration

<!-- Add tailwindcss and autoprefixer to your postcss.config.js file, or wherever PostCSS is configured in your project. -->

postcss.config.js

module.exports = {
plugins: {
tailwindcss: {},
autoprefixer: {},
}
}

# 3.Configure your template paths

<!-- Add the paths to all of your template files in your tailwind.config.js file. -->

tailwind.config.js

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: ["./src/**/\*.{html,js}"],
theme: {
extend: {},
},
plugins: [],
}

$
add in package.json
"start":"vite"
(can del test script)
$

# 4.Add the Tailwind directives to your CSS

<!-- Add the @tailwind directives for each of Tailwind’s layers to your main CSS file. -->

main.css

@tailwind base;
@tailwind components;
@tailwind utilities;

# 5.Start your build process

<!-- Run your build process with npm run dev or whatever command is configured in your package.json file. -->

Terminal{
npm run dev  // npm start
<!-- ctrl+c -->
}

# 6.Start using Tailwind in your HTML

<!-- Make sure your compiled CSS is included in the <head> (your framework might handle this for you), then start using Tailwind’s utility classes to style your content. -->

index.js

<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- linking main.css -->
  <link href="/dist/main.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>

