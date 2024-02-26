import React from "react";
import { CiSearch } from "react-icons/ci";

import { Form, FormControl } from "react-bootstrap";

export default function Search() {
  return (
    <div className="border rounded-2 ">
      <Form className="d-flex border-none outline-none">
        <FormControl
          type="text"
          placeholder="What are you looking for?"
          className="mr-sm-2"
        />
        <CiSearch className="fs-3 my-auto cursorpointer" />
      </Form>
    </div>
  );
}
