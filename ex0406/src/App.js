import "./App.css";
import Head from "./components/Head";

function App() {
  return (
    <div className="App">
      <Head key={1} name="홍길동" age={20} />
      <Head key={2} name="김길동" age={30} />
      <Head key={3} name="박길동" age={40} />
    </div>
  );
}

export default App;
