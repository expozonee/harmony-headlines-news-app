/* eslint-disable react-refresh/only-export-components */
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { getNews, NewsData } from "../../utils/getNews";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { useNews } from "../../providers/NewsProvider";
import { generateDate } from "../../utils/generateDate";
import { LocalstorageData } from "../../types/LocalstorageData";

export async function rootLoader() {
  try {
    const dataLocalstorage = JSON.parse(
      localStorage.getItem("news")!
    ) as LocalstorageData;

    if (dataLocalstorage) {
      const dataTimeAdded = dataLocalstorage.dateAdded;
      const now = generateDate();

      if (
        dataTimeAdded.day === now.day &&
        dataTimeAdded.month === now.month &&
        Math.abs(dataTimeAdded.hour - now.hour) <= 3
      ) {
        return dataLocalstorage.data;
      }
    }

    const news = await getNews();

    return news;
  } catch (error) {
    throw new Error(`Couldn't fetch the news: ${error}`);
  }
}

export default function NewsCardList() {
  const { setNewsData, getNewsFromLocalStorage } = useNews();
  const news = useLoaderData() as NewsData[];
  const [nnews, setNnews] = useState<NewsData[] | undefined>(undefined);

  useEffect(() => {
    async function getMoodsForTitles() {
      const titles = news.map((n) => n.title);
      const objTitle = {
        titles,
      };
      const moodsRes = await fetch(
        "https://harmony-headlines-news-backend-app.vercel.app/initial-mood",
        {
          method: "POST",
          body: JSON.stringify(objTitle),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const Moods = (await moodsRes.json()).moods;

      const dataToAdd = news.map((n, index) => {
        return {
          ...n,
          mood: Moods[index],
        };
      });

      setNewsData(dataToAdd);
      setNnews(getNewsFromLocalStorage().data);
    }
    getMoodsForTitles();
  }, [news, setNewsData]);

  return (
    <div className="card-list">
      <Suspense fallback={<p>Loading News...</p>}>
        <Await resolve={news}>
          {nnews &&
            nnews.map((n, index) => {
              return (
                <NewsCard
                  key={index}
                  title={n.title}
                  author={n.author}
                  source={n.source}
                  image={n.image}
                  publishedAt={n.published_at}
                  id={index}
                  mood={n.mood!}
                />
              );
            })}
        </Await>
      </Suspense>
    </div>
  );
}
