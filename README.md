# Your Task - Details

As always, there are multiple ways to build the example application shown in the previous lecture. However, your solution should include the following elements/features:

1. **Reusable, Flexible Button Component**:
    - Renders either a `<button>` or a `<Link>` (from `react-router-dom`), depending on the presence of the `to` prop.
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
    - Accepts a `textOnly` prop that, when `true`, adds the "button--text-only" CSS class to the rendered element.
    - Standard `<button>` or `<Link>` props should be settable on `<Button>` and spread onto the rendered element.

2. **Custom, Reusable Input Wrapper Component**:
    - Bundles `<label>` and `<input>` elements into a `<div>` element.
    - Accepts standard `<input>` props and spreads them onto the rendered `<input>` element.

3. **Custom Modal Component**:
    - Exposes an `open()` method that triggers the built-in `showModal()` method on the `<dialog>` element.
    - The `<dialog>` element should be "teleported" into the `<div id="modal-root">` element.
    - Used for the "Book a Session" and "Upcoming Sessions" components, which should trigger the `open()` method when rendered conditionally by other components.

4. **Centralized Session Management**:
    - Booked sessions should be managed centrally using React's Context API and the `useReducer()` Hook.
