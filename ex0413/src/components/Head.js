import { Link } from "react-router-dom";

function Head() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Root</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Head;
