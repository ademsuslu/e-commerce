import React from "react";
import { Button } from "react-bootstrap";

export default function BtnDanger({ text }) {
  return <Button className="btn btn-danger ">{text}</Button>;
}
