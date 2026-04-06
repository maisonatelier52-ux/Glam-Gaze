import { notFound } from "next/navigation";
import CelebrityStyleSection from "../component/CelebrityStyle";
import HomeGridCategory from "../component/HomeGridCategory";
import ReadMore from "../component/Latest";
// import OscarsSection from "../component/OscarSection";
import data from "@/data/data.json";

export default async function Category({ params }) {
  const { category } = await params;

  // Allowed categories
  const validCategories = [
    "fashion",
    "teen",
    "style",
    "business",
    "actress",
    "culture",
    "living",
  ];

  if (!validCategories.includes(category.toLowerCase())) {
    return notFound();
  }

  // filter articles by category
  const filteredArticles = data.articles.filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  ).sort ((a,b) => new Date(b.date) - new Date(a.date));

  const articles = filteredArticles.slice(0, 5);
  const celebrity = filteredArticles.slice(5, 9);
  const latest = filteredArticles.slice(9, 15);

  return (
    <div className="px-4 sm:px-6 lg:px-8">

      {/* DYNAMIC HEADING */}
      <div className="text-center py-6 mb-10 mt-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase">
          {category}
        </h1>
      </div>

      <HomeGridCategory articles={articles} />
      {/* <OscarsSection title={"Vogue’s Global Spa Guide"} articles={articles} /> */}
      <CelebrityStyleSection title={"LATEST STORIES"} articles={celebrity} />
      { <ReadMore articles={latest} />}

    </div>
  );
}