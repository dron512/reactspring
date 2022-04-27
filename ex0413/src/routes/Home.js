import React from "react";
import { Form } from "react-bootstrap";
import Carou from "../components/Carou";

const Home = () => {
  return (
    <div>
      <div className="mt-2">
        <h1>우리도캠핑가자</h1>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>예약 가능한 곳</Form.Label>
        <Form.Control type="email" placeholder="검색" />
        <Form.Text className="text-muted">예약가능한 캠핑 검색하세요</Form.Text>
      </Form.Group>
      <Carou />
    </div>
  );
};

export default Home;
