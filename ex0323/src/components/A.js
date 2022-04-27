import React, { useState } from "react";

export default function A(props) {
  console.log(props);
  const [b, bSet] = useState(props.b);

  function doAdd() {
    console.log("doAdd");
    console.log("b = " + b);
    bSet(b + 1);
  }
  function doSub() {
    console.log("doSub");
  }

  return (
    <div>
      <h1>A</h1>
      <div>{props.a}</div>
      <div>{b}</div>
      <button onClick={doAdd}>숫자증가</button>
      <button onClick={doSub}>숫자감소</button>
    </div>
  );
}
