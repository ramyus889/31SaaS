import React from "react";
import { Tooltip, Button } from "@nextui-org/react";

export default function App() {
  return (
    <Tooltip content="I am a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  );
}
