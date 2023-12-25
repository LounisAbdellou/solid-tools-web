import { createSignal, createContext, useContext, JSX } from "solid-js";

const MapDataContext = createContext();

export const MapDataProvider = ({ children }: { children: JSX.Element }) => {
  const [walls, setWalls] = createSignal(0);

  const createElement = (newValue: any) => {};

  const editElement = (localId: string, newValue: any) => {};

  const deleteElement = (localId: string) => {};

  const value = { walls };

  return (
    <MapDataContext.Provider value={value}>{children}</MapDataContext.Provider>
  );
};

export const useMapData = () => {
  return useContext(MapDataContext);
};
