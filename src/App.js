import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary App</header>
        <main>
          <Dictionary defaultKeyword="love" />
        </main>
        <footer>
          <a
            className="text-decoration-none text-secondary"
            href="https://github.com/giovannamaral/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Giovanna Amaral
        </footer>
      </div>
    </div>
  );
}
