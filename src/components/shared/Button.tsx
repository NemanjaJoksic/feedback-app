import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode | undefined;
  isDisabled: boolean;
};

function Button(props: ButtonProps) {
  return (
    <button
      className="btn btn-primary"
      type="submit"
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  );
}

export default Button;