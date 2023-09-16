import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';

function FAQ(props) {
  const [open, setOpen] = useState(false);
    return (
      <div className="FAQ">
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
        {props.question}
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {props.answer}
        </div>
      </Collapse>
    </div>
    );
}

export default FAQ;