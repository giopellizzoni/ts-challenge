# Your Task - Details

As always, there'll be more than one way of building the example application shown in the previous lecture.

But your solution code should contain the following elements / features:

1. **Reusable, Flexible Button Component**:
    - A reusable, flexible `Button` component that renders either a  `<button>` or `<Link>` (a component provided by `react-router-dom`), depending on the presence of the `to` prop is present on `<Button>` or not.
    - Example:
      ```jsx
      <Button to="/sessions">Click me</Button> 
      // Renders as:
      <Link to="/sessions">Click me</Link>
      ```
      ```jsx
      <Button>Click me</Button> 
      // Renders as:
      <button>Click me</button>
      ```
    - Both `<button>` and `<Link>` should receive a "button" CSS class.
    - The `Button` should accept a `textOnly` prop that, when set to true, should add the `"button--text-only"` CSS class to the rendered element - no matter if it's a `<Link>` or `<button>` that's rendered.
    - The standard `<button>` or `<Link>` props should be settable on `<Button>` (and then be spread onto `<button>` or `<Link>`)

2. **Custom, Reusable Input Wrapper Component**:
    - A custom, reusable `Input` wrapper component that can be used to fetch user input - it should bundle ("connected") `<label>` and `<input>` elements into a `<div>` element
    - The standard `<input>` props should be accepted by `Input` and should be spread onto the rendered `<input>` element

3. **Custom Modal Component**:
    - A custom `Modal` component that exposes an `open()` method which, inside the `Modal` component, then triggers the built-in `showModal()` method on the built-in `<dialog>` element - in addition, the `<dialog>` element should be "teleported" into the `<div id="modal-root">` element
    - The custom `Modal` component should then be used for the *"Book a Session"* and *"Upcoming Sessions"* components - these components should trigger `Modal`'s exposed `open()` method whenever they are added to the DOM (i.e., the `"Book a Session"` and `"Upcoming Sessions"` components should be rendered conditionally by other components)

4. **Centralized Session Management**:
    - Booked sessions should be managed centrally using React's Context API and the `useReducer()` Hook.
