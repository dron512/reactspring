import React, { useState } from "react";

const Head = (props) => {
  let name = props.name;
  const [age, setAge] = useState(props.age);
  return (
    <div>
      <h2>head</h2>
      <p>
        이름은 {name}
        <br></br>
        나이는 {age}
      </p>
      <input type="text" name="name" />
      <br />
      <button>이름 바꾸기</button>
      <br />
      <button
        onClick={() => {
          setAge(age - 1);
        }}
      >
        나이 줄이기
      </button>
      <br />
      <button>나이 늘리기</button>
    </div>
  );
};

export default Head;
