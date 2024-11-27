import "./SingleNews.css";
import { useParams } from "react-router-dom";
import { useNews } from "../../providers/NewsProvider";
import { changeMood } from "../../utils/moodHandle";
import { useState } from "react";
import { NewsData } from "../../utils/getNews";

export async function SingleNewsLoader() {}

export default function SingleNews() {
  const { id } = useParams();
  const [less, setLess] = useState<
    Pick<NewsData, "title" | "description" | "mood"> | undefined
  >(undefined);
  const { getNewsFromLocalStorage } = useNews();

  if (!id) throw new Error("The desired news does not exist");

  const news = getNewsFromLocalStorage();

  if (!news) throw new Error("No News");

  const desiredNews = news[+id];

  if (!desiredNews) throw new Error("The desired news does not exist");
  const date = new Date(desiredNews.published_at);

  return (
    <article className="article__news">
      <img src={`${desiredNews.image}`} alt="News image" />
      <h1>{less ? less.title : desiredNews.title}</h1>
      <small>{desiredNews.source}</small>
      <small>{date.toString()}</small>
      <p>Mood: {less ? less.mood : desiredNews.mood}</p>
      <button
        onClick={async () => {
          const less = await changeMood(desiredNews);
          setLess(less);
        }}
      >
        Make less aggressive
      </button>
      <p>{less ? less.title : desiredNews.description}</p>
    </article>
  );
}
