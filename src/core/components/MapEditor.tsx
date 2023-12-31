// Libraries

// Components
import Walls from "./mapElements/Walls";

// Utilities
import styles from "@styles/mapEditor.module.css";

const MapEditor = () => {
  let svgMap;

  const walls = [
    {
      id: 1,
      localId: "WALL_123",
    }
  ]

  const handleMouseDown = (e: MouseEvent) => {};

  const handleMouseUp = (e: MouseEvent) => {};

  const handleMouseMove = (e: MouseEvent) => {};

  return (
    <svg
      ref={svgMap}
      class={styles.svgMap}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <Walls walls={walls} />
    </svg>
  );
};

export default MapEditor;
