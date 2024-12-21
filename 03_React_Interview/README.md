<h1> 1) Hooks with Example. </h1>
 Hooks are functions that let us “hook into” React state and lifecycle features from a 
functional component.</br>

React hooks were introduced in the 16.8 version of React. Previously, functional components were called 
stateless components. Only class components were used for state management and lifecycle methods. 
The need to change a functional component to a class component, whenever state management or 
lifecycle methods were to be used, led to the development of Hooks. </br>

a) useState : Manages state in functional components. </br>

useState accepts an initial state and returns two values: </br>

-> The current state.</br>
-> A function that updates the state.

b) useEffect : Handles side effects in functional components. </br>



c) useContext : Accesses the context in functional components.

d) useMemo : Memoizes values to optimize performance.

e) useCallback : Memoizes callback functions to prevent unnecessary renders.

f) useReducer : Manages complex state logic with a reducer function.

g) useRef : The useRef hook in React is a powerful tool that allows you to persist values between renders without causing a re-render.

<h6>case 1)  It is particularly useful for accessing and manipulating DOM elements directly. </h6>

![useRef](useRef_1.png)

<h6>case 2)Persisting Value across re-renders.</h6>

![useRef](useRef_2.png)



<h1> 2) Higher Order Components (HOC) </h1>
What?: Functions that take a component and return an enhanced version.
When?: Reuse component logic, share code, or manipulate component behavior.
Why?: Promotes code reusability and separation of concerns.
How?: Wrap a component with a function that adds or modifies its behavior.

<h1> 3) Life Cycle Methods of Components </h1>

![Lifecyce](<Lifecycle Method.png>)


<h1> 4) State management (all about data) </h1>
<h1> 5) Redux or Zustand: </h1>
<h1> 6) Custom Hooks: </h1>
<h1> 7) Lazy Loading: </h1>
<h1> 8) Virtual DOM: </h1>
<h1> 9) SSR vs CSR (important): </h1>
<h1> 10) Routing (Role-based access control-RBAC): </h1>
<h1> 11) Testing: </h1>

<h1>  Async Tasks:</h1>
<h1>  eusability, Readability, modularity, testability (Coding Practices) </h1>
<h1>  Styling: </h1>


<h1>  Prop Drilling </h1>
Sometimes while developing React applications, there is a need to pass data from a component i.e.
higher in the hierarchy to a component that is deeply nested. To pass data between such components, 
we pass props from a source component and keep passing the prop to the next component in the 
hierarchy till we reach the deeply nested component. </br>

Disadvantage :  The components that should otherwise be not aware of the 
data have access to the data 


<h1> Controlled Vs Uncontrolled Component </h1>

<h3>Controlled Component :</h3> Here form data is handled by React Component State

<h6>State Manipulation :</h6> The Value of the input field is controlled by React State (useState or this.state in class component)
<h6>Event Handler :</h6> Changes to the input field(like typing into a text field) are handled by React event handler(onChange, OnBlur, etc)

 <input
  name="name"
  value={name}
  onChange={(e) => setName(e.target.value)
 }




<h3>UnControlled Component</h3> Here form data is handled by DOM itself.

<h6>Direct DOM Manipulation :</h6> The Value of the input field is controlled by DOM (Documenr.getElementById)
<h6>Event Handler :</h6> Changes to the input field(like typing into a text field) are handled by DOM events (onChange, OnBlur, etc)

 <input
  type="text"
  name="name"
  ref={inputRef}
 />