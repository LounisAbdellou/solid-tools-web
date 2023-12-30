// Libraries

// Components

// Utilities
import { Wall } from "@interfaces/mapEditor";
import { Component } from "solid-js";

interface Props {
  walls: Wall[];
}

const Walls: Component<Props> = ({ walls }) => {
  const handleMouseDown = (e: MouseEvent) => {};

  const handleMouseUp = (e: MouseEvent) => {};

  const handleMouseMove = (e: MouseEvent) => {};

  return (
    <g id="WALLS">
      {walls.map((wall) => {
        return (
          <polygon
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {wall.localId}
          </polygon>
        );
      })}
    </g>
  );
};

export default Walls;
