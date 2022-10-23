import { createContext, useContext, useState } from "react";
import type { CurrentSongInterface } from "../types/types";

type AppProviderProps = {
  children: React.ReactNode;
  currentSong: CurrentSongInterface;
  onPlay: (param: CurrentSongInterface) => void;
};

type ContextProps = {
  currentSong: CurrentSongInterface;
  onPlay: (param: CurrentSongInterface) => void;
};

const AppContext = createContext<ContextProps | undefined>(undefined);

export const AppProvider = ({
  children,
  currentSong,
  onPlay,
}: AppProviderProps) => {
  return (
    <AppContext.Provider value={{ currentSong: currentSong, onPlay: onPlay }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useAppContext hook can be used only within a AppContext provider!"
    );
  }

  return context;
};

export default AppContext;
