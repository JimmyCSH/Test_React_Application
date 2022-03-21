import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1 class="title">
          Test React Application
        </h1>
      </header>

      <body>
        <div class="outer">
          <div class="row">
            <div class="column">
              <div class="card">
              <h2>Card 1</h2>
              </div>
            </div>
            <div class="column">
              <div class="card">
              <h2>Card 2</h2>
              </div>
            </div>
            <div class="column">
              <div class="card">
              <h2>Card 3</h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>This is a paragraph.</p>
        </div>
      </body>

    </div>
  );
}

export default App;
