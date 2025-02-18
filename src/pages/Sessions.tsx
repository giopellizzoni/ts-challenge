import Button from "../components/UI/Button.tsx";
import { SESSIONS } from "../dummy-sessions.ts"; // normally, we would probably load that from a server

export default function SessionsPage() {
  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React&apos;s basics all the way up
          to a deep dive into state mechanics - we got just the right session
          for you!
        </p>
      </header>
      <main>
        <div id="sessions-list">
          {SESSIONS.map((session) => (
            <div key={session.id} className="session-item">
              <img src={session.image} alt={session.title} />
              <div className="session-data">
                <h3>{session.title}</h3>
                <p>{session.summary}</p>
                <div className="actions">
                  <Button textOnly={false}>Learn More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </main>
  );
}
