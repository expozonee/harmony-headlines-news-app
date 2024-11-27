/* eslint-disable react-refresh/only-export-components */
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { getNews, NewsData } from "../../utils/getNews";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { useNews } from "../../providers/NewsProvider";
import { initialMoods } from "../../utils/moodHandle";

export async function rootLoader() {
  try {
    const news = await getNews();
    return news;
  } catch (error) {
    throw new Error(`Couldn't fetch the news: ${error}`);
  }
}

export default function NewsCardList() {
  const { setNewsData } = useNews();
  const [moods, setMoods] = useState<number[]>([]);
  const news = useLoaderData() as NewsData[];

  useEffect(() => {
    async function getMoodsForTitles() {
      const titles = news.map((n) => n.title);
      const moods = (await initialMoods(titles)) as number[];
      setMoods(moods);

      const dataToAdd = news.map((n, index) => {
        return {
          ...n,
          mood: moods[index],
        };
      });

      setNewsData(dataToAdd);
    }
    getMoodsForTitles();
  }, [news, setNewsData]);

  return (
    <div className="card-list">
      <Suspense fallback={<p>Loading News...</p>}>
        <Await resolve={news}>
          {news.map((n, index) => {
            return (
              <NewsCard
                key={index}
                title={n.title}
                author={n.author}
                source={n.source}
                image={n.image}
                publishedAt={n.published_at}
                id={index}
                mood={moods[index]}
              />
            );
          })}
        </Await>
      </Suspense>
    </div>
  );
}
