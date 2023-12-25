// Libraries

// Components
import Walls from "./mapElements/Walls";

// Utilities
import styles from "@styles/mapEditor.module.css";

const MapEditor = () => {
  let svgMap;

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
      <Walls />
    </svg>
  );
};

export default MapEditor;
