import React from "react";
import { Div, FormLabel, Input } from "./DashFormRowStyle";
const DashFormRow = ({ children, labelText, htmlFor, ...otherProps }) => {
  return (
    <Div>
      <FormLabel htmlFor={htmlFor}>{labelText}</FormLabel>
      <Input {...otherProps} />
      {children}
    </Div>
  );
};

export default DashFormRow;
