import React from "react";
import { useState } from "react";
import WorldClockForm from "./WorldClockForm";
import Clock from "./Clock";

function WorldClockWidget() {
  const [clocks, setClocks] = useState([
    {
      id: "1",
      name: "Moscow",
      timezone: "+3",
    },
  ]);

  const handleAdd = (clock) => {
    setClocks([...clocks, clock]);
  };

  const handleDelete = (id) => {
    setClocks((prevClocks) => prevClocks.filter((o) => o.id !== id));
  };

  return (
    <div className="clock-widget">
      <WorldClockForm onAdd={handleAdd} />
      <ul className="clock-list">
        {clocks.map((clock) => (
          <li className="clock-list-elem" key={clock.id}>
            <Clock clock={clock} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorldClockWidget;
