# using CDN
<script src="https://cdn.tailwindcss.com"></script>

# Alternate Installation

npm install -D tailwindcss postcss autoprefixer vite<!-- -D is for Dev dependencies -->
npx tailwindcss init -p

# -----------

content: ["*"],

 <!-- entire project in tailwind.config.js -->

"scripts":{
"start":"vite"
},

<!-- In package.json -->

create a file main.css
{
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
}

<!-- linking main.css -->
  <link href="/dist/main.css" rel="stylesheet">

# npm run start


u can add own colours/ font-family etc in tailwind config->extend

./ takes u one folder before to the current folder

"class group" is used on parent element and effects are on child also