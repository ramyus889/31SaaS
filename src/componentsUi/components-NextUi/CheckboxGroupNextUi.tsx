import React from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

export default function App() {
  return (
    <CheckboxGroup
      label="Select cities"
      defaultValue={["buenos-aires", "london"]}
    >
      <Checkbox color="warning" value="buenos-aires">
        Buenos Aires
      </Checkbox>
      <Checkbox value="sydney">Sydney</Checkbox>
      <Checkbox value="san-francisco">San Francisco</Checkbox>
      <Checkbox value="london">London</Checkbox>
      <Checkbox value="tokyo">Tokyo</Checkbox>
    </CheckboxGroup>
  );
}
