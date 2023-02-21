import React from "react";
import { Div, FormLabel, Select, Option } from "./DashFormSelectStyles";

const DashFormSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <Div>
      <FormLabel htmlFor={name}>{labelText || name}</FormLabel>
      <Select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      >
        {list.map((optionType, index) => {
          return (
            <Option
              key={index}
              value={optionType}
            >
              {optionType}
            </Option>
          );
        })}
      </Select>
    </Div>
  );
};

export default DashFormSelect;
