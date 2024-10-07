This is a Countries List project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all packages using pnpm,

```bash
pnpm install
```

Next, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Requirements Met

Below are the requirements that were met in building this project:

- Fetch country data from the provided REST API endpoint.
- Implement proper error handling and loading states.
- Create a TypeScript interface for the country data object.
- Implement a function to sort countries by population (ascending and descending).
- Create a function to filter countries by region.
- Implement a search functionality to find countries by name or capital.
- Create a responsive grid layout to display country cards.
- Each card should show the country's flag, name, capital, population, and region.
- Implement a detailed view for each country when clicked, showing additional information like currencies, languages, and time zones.
- Use React hooks for local state management.
- Implement context API for global state management.
- Implement lazy loading for country cards as the user scrolls.
- Use Next.js Image component for optimized image loading.
- Implement memoization where appropriate to prevent unnecessary re-renders.
- Create a custom hook for fetching and caching API data.
- Implement server-side rendering (SSR) for initial page load.
- Add dark mode toggle with persistent user preference.
- Write unit tests for utility functions
- Create component tests using React Testing Library.
- Implement at least one integration test for the main page.

## Unmet Requirements. (To be met in the future)

- Implement at least one integration test for the main page.
- Implement a feature to compare two countries side by side.
- Add a visualization (e.g., a map or chart) using a library of your choice.
- Create a CI/CD pipeline using GitHub Actions or a similar tool.
