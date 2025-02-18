import Button from "./Button";

const Header = () => {
  return (
    <header id="main-header">
      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <li>
            <Button to="/" textOnly={true}>
              Our Mission
            </Button>
          </li>
          <li>
            <Button to="/sessions" textOnly={true}>
              Browse Sessions
            </Button>
          </li>
          <li>
            <Button textOnly={false}>Upcoming Sessions</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
