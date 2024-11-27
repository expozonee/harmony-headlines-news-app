export type NewsData = {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string | null;
  category: string;
  language: string;
  country: string;
  published_at: string;
  mood?: number;
};

export async function getNews() {
  const params = {
    access_key: process.env.NEWS_API_KEY!,
    languages: "en",
    countries: "us,il,ae",
    keywords: "israel,palestine",
    limit: "10",
  };

  const urlParams = new URLSearchParams(params).toString();

  const newsRes = await fetch(`${process.env.NEWS_API_URL}?${urlParams}`);
  const newsData = await newsRes.json();
  const news = newsData.data as NewsData[];
  return news;
}
