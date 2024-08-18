## React Assignment

1. How can you implement shared functionality across a component tree?

- shared functionality is done using components, hooks, and context API. Components are used to create reusable pieces of code that can be used in multiple places. Hooks are used to share logic between components. Context API is used to share state between components without having to pass props down through the component tree. For the project, I have used components to create reusable pieces of code that can be used in multiple places. I have used jotai (a lightweight alternative to context api) to share state between components without having to pass props down through the component tree.

2. Why is the `useState` hook appropriate for handling state in a complex component?

because 
- it allows to manage state in a functional component. 
- is simple, easy-to-use and lightweight hook.
- however when multiple states are needed, it can be cumbersome to manage them all and then state management is needed.

3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
