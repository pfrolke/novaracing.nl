import React from "react";
import { Button, ButtonProps } from "react-bootstrap";
import "./NovaButton.css";

const NovaButton = (props: ButtonProps) => {
  return <Button {...props}>{props.children}</Button>;
};

export default NovaButton;
