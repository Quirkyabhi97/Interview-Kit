<h1> 1) Hooks with Example. </h1>

a) useEffect
b) useState
c) useRef
d) useMemo
e) useCallback
f) useReducer
g) useRef

<h1> 2) Higher Order Components (HOC) </h1>
What?: Functions that take a component and return an enhanced version.
When?: Reuse component logic, share code, or manipulate component behavior.
Why?: Promotes code reusability and separation of concerns.
How?: Wrap a component with a function that adds or modifies its behavior.

<h1> 3) Life Cycle Methods of Components </h1>
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




<h3>UnControlled Component</h3> Here form data is handled by DOM itself.

<h6>Direct DOM Manipulation :</h6> The Value of the input field is controlled by DOM (Documenr.getElementById)
<h6>Event Handler :</h6> Changes to the input field(like typing into a text field) are handled by DOM events (onChange, OnBlur, etc)