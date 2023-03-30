This app is a search tool for GitHub repositories. Users can enter a search query (either by username or organization name) and filter results by various criteria (such as sorting by stars or forks). The application displays a list of repositories matching the search criteria, along with pagination for navigating through the results.

I am using React and Typescript for the frontend and Bootstrap for styling with Jest and React Testing Library for unit tests. The application also utilizes custom hooks (specifically, useFetchRepositories), which abstract away the details of API calls to the GitHub API. The useFetchRepositories hook retrieves data from the GitHub API using the fetch function.

To run the application:
1. Setup environment variables
  - Create a new file named .env at the root of your project directory.
  - Add the following variable to the file: VITE_GITHUB_ACCESS_TOKEN=[YOUR_GITHUB_ACCESS_TOKEN]
  - To generate a GitHub access token, follow the instructions in the [GitHub documentation](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
2. `npm install`
3. `npm run dev`

To run unit tests:
`npm run test`

Next steps to making this deployable:
- Use Webpack to bundle the files
- Add linting
- Implement e2e tests
- Setup CI/CD pipeline to automate deployment: Jenkins, Travis CI, and CircleCI
- Containerize the app using Docker
- Implement monitoring using tool like Datadog
- Host app in cloud using service like AWS EKS

Ideas for new features
- Displaying more repo data, creating links for navigation to the github repo URL
- Allow searching for repositories by name
- Improved table view with better UX for sorting/filtering
- Caching search settings to persist results on page refresh
