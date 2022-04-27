import "./App.css";
import A from "./components/A.js";

function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <li>메뉴1</li>
          <li>메뉴2</li>
          <li>메뉴3</li>
        </ul>
      </div>
      <div>
        <A a="a1" b={10} />
        <A a="a2" b={20} />
        <A a="a3" b={30} />
      </div>
    </div>
  );
}

export default App;
