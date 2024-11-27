import { Link } from "react-router-dom";
import "./NewsCard.css";

type NewsCardProps = {
  author: string;
  title: string;
  id: number;
  source: string;
  image: string | null;
  publishedAt: string;
  mood: number;
};

export default function NewsCard({
  author,
  title,
  image,
  source,
  id,
  mood,
  publishedAt,
}: NewsCardProps) {
  return (
    <Link
      style={{ paddingRight: `${image ? "" : "1.5rem"}` }}
      className="news__card"
      to={`/news/${id}`}
    >
      <div>
        <h3 className="news__card-title">{title}</h3>
        <small className="news__card-author">{author}</small>
        <small className="news__card-source">{source}</small>
        <time className="news__card-time">
          {new Date(publishedAt).toString()}
        </time>
        <p className="mood">mood: {mood}</p>
      </div>
      {image && <img src={image} alt="news image" />}
    </Link>
  );
}
