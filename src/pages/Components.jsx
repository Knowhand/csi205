import { useState } from "react";
import Value from "../components/Value";
import Adder from "../components/Adder";
import Timer from "../components/Timer";
import Temperature from "../components/Temperature";
import RadixCounter from "../components/RadixCounter";

const Components = () => {

  const [value, setValue] = useState(0);

  return (
    <div
      className="w-100 h-auto bg-white rounded-4 py-3"
      style={{ boxShadow: "0 5px 5px #cccccc" }}
    >
      <Value name={"COUNTER"} value={value} setValue={setValue} />
      <Adder />
      <Timer />
      <Temperature />
      <RadixCounter />
      

  const [value, setValue] = useState(0);
    </div>
  );
};

export default Components;
