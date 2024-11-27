/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext } from "react";
import { NewsData } from "../utils/getNews";

type NewsContext = {
  setNewsData(data: NewsData[]): void;
  getNewsFromLocalStorage(): NewsData[];
};

type NewsProviderProps = {
  children: ReactNode;
};

const NewsContext = createContext<NewsContext | null>(null);

export function NewsProvider({ children }: NewsProviderProps) {
  function setNewsData(data: NewsData[]) {
    const isDataArr = Array.isArray(data);

    if (isDataArr) {
      localStorage.setItem("news", JSON.stringify(data));
    }
  }

  function getNewsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("news")!) as NewsData[];
  }

  return (
    <NewsContext.Provider value={{ setNewsData, getNewsFromLocalStorage }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  const news = useContext(NewsContext);

  if (news === null) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return news;
}
