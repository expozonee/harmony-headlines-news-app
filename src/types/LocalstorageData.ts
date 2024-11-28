import { NewsData } from "../utils/getNews";

export type LocalstorageData = {
  data: NewsData[];
  dateAdded: {
    day: number;
    month: number;
    year: number;
    hour: number;
    mins: number;
  };
};
