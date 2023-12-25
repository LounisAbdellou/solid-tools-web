// Libraries

// Components
import MapEditor from "@components/MapEditor";

// Utilities
import { MapDataProvider } from "@contexts/MapDataContext";
import styles from "@styles/mainPage.module.css";

const MainPage = () => {
  return (
    <div class={styles.container}>
      <MapDataProvider>
        <MapEditor />
      </MapDataProvider>
    </div>
  );
};

export default MainPage;
