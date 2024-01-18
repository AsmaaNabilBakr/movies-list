This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Movie-app-nextJs

Build a movie application using any third-party API (https://www.omdbapi.com/), utilizing either Next JS and use State management using Redux for managing the states, and for building the UI, you can use Material UI or any other UI you prefer.

- [x] Implement Google Auth API For Login(Firebase).
- [x] Create a movie listing page that displays a grid of movie posters.
  - [ ] Implement a search feature that allows users to search for movies by title, genre, or keyword. The search should return relevant results based on the user's input.
  - [ ] Create a feature that allows users to filter movies by various criteria, such as genre, release year, rating, and more.
    - [ ] The filtering should be dynamic and update the movie listings in real time.
- [ ] Implement a movie details page that displays more detailed information about a particular movie, including the title, synopsis, release date, rating, cast, and crew. Include a trailer or a link to watch the movie.
- [x] When the user hovers over a movie, show additional information.
- [ ] Create a feature that allows users to create and manage their own watchlists.
  - [-] Users should be able to add or remove movies from their watchlists and view their watchlists at any time. -Add to list is impelemented but need user session token to responce with success-
- [x] Create a responsive design that works well on all devices, including desktops, tablets, and mobile phones. The layout should adapt to different screen sizes and orientations.
- [x] Use techniques such as lazy loading, caching, and minification to reduce load times and improve the user experience.
