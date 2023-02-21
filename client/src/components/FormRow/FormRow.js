import React from "react";
import { Div, FormLabel, Input } from "./FormRowStyle";
const FormRow = ({ children, labelText, htmlFor, ...otherProps }) => {
  return (
    <>
      <Div>
        <Input {...otherProps} />
        <FormLabel
          htmlFor={htmlFor}
          shrink={otherProps.value.length}
        >
          {labelText}
        </FormLabel>
        {children}
      </Div>
    </>
  );
};

export default FormRow;
