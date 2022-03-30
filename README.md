# Instructions
We'll be building a simple App that will have the following features:
- Navigation buttons
- Highlighting of the current page in the navigation bar
- Static routing
- Unknown URL handling
- Dynamic routing (bonus!)

## Installation
- Clone down this repo and checkout this `exercise` branch
- Run npm `install`
React router is included in the dependencies at version ^5.3.0.

## Step 1 - Create some static routes
- Import a Browser router (remember you can alias its name!) and route from `react-router-dom`
- In `App.js`, create a Router component and include several Route components, each with a path to a hardcoded route (These could be something like 'contact', 'about', 'portfolio', whatever you like!), start by making 4. (*Make sure one of them is a Home route with the path `/`*)
- Put a simple `h1` element in each of these routes with a unique value so they can easily be told apart.
- Try manually typing these new routes in your address bar and seeing if you get the results you expect. 

Did you get the results you expect? If not, whats the issue?

## Building the navigation bar and links
We are going to add a navigation bar including links to each of the new routes we've just made.
- In `App.js` Create an unordered list at the top of the component and populate it with some `li` elements. Inside each of these use the `NavLink` component from the `react-router-dom` to declare the path it will handle and the name of the link.
- Can we now click on these and see the address bar updating as expected?
- Once this is working we should add some highlighting to the selected route so its obvious which one is currently selected (there is a prop available to us on `NavLink` specifically for this). There is a CSS class `selected-link` already defined in the project for you that can be provided to this (feel free to change the styling as you like)

## Handling unknown URLs
Lets say we want to redirect to the home page in the case of an unknown URL being entered into the address bar. Currently this is not handled, so we need to define another `Route` that will catch any routes that dont match what is already defined, and then redirect to the home page
- When doing this, think about the path property in `Route`. Does it have a default? What happens if it is not defined? There is also another component to be used from `react-router-dom` to handle redirection which should be used here

## BONUS - Handling dynamic routes
There is a file of placeholder data as well as an up to now unused component `Selection` already included in the project. This component will need to be finished off and the data passed down to it

- Import the data file and the `Selection` component into `App.js`, paying attention to what props it requires. Create a route for this and output the `Selection` component
- This component should output each of the titles given in the `placeholderData` file, each of which when clicked will navigate to a route in the format 'selection/{id}'. Use `Link` to do this.
- Once this works, create a new component called `SelectionDetails`. This will be rendered when one of the dynamic  routes created in the last step is navigated to, and should show the `message` related to the route. This component should accept the same props as the `Selection` component (just scaffold the basic component for now, don't worry about the full functionality just yet)
- Add a new route to `App.js` with an appropriate path for dynamic routes, and render the new `SelectionDetails` component when this is hit.
- Back in `SelectionDetails`, we need to make use of the `useParams` hook to get the id from the route. Using this id, we should be able to get the correct message from the data object (which has been passed in as a prop) and display the message vaalue in the body of the component.
