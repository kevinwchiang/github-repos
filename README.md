This app is a search tool for GitHub repositories. Users can enter a search query (either by username or organization name) and filter results by various criteria (such as sorting by stars or forks). The application displays a list of repositories matching the search criteria, along with pagination for navigating through the results.

I am using React and Typescript for the frontend and Bootstrap for styling. The application also utilizes custom hooks (specifically, useFetchRepositories), which abstract away the details of API calls to the GitHub API. The useFetchRepositories hook retrieves data from the GitHub API using the fetch function.

To run the application:
1. `npm install`
2. `npm run dev`

I am using Jest and React Testing Library for unit testing.
To run unit tests:
`npm run test`
