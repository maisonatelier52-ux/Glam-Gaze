import CelebrityStyleSection from "./component/CelebrityStyle";
import HomeGrid from "./component/HomeGrid";
import MustRead from "./component/MustRead";
import OscarsSection from "./component/OscarSection";
import data from "@/data/data.json";
// import ShopSection from "./component/ShopSection";
import Latest from "./component/Latest";
import NewsletterModal from "./component/NewsLetterModal";

export default function Home() {
  const sortedDate = [...data.articles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Track used articles (to avoid repetition)
  const used = new Set();

  const getArticles = (filterFn, limit) => {
    const result = [];

    for (const article of sortedDate) {
      if (!used.has(article.slug) && filterFn(article)) {
        result.push(article);
        used.add(article.slug);
      }
      if (result.length === limit) break;
    }

    return result;
  };

  // SECTIONS

  const homeGrid = getArticles(() => true, 7);

  const fashionStyle = getArticles(
    (a) => ["fashion", "style"].includes(a.category),
    8
  );

  const celebrity = getArticles(
    (a) => a.category === "actress",
    4
  );

  const trendingNow = getArticles(() => true, 6);

  const mustRead = getArticles(() => true, 3);

  const nextGen = getArticles((a) => a.category === "teen",6);

  const businessSection = getArticles((a) => a.category === "business",6);

  const cultureLiving = getArticles((a) => ["culture", "living"].includes(a.category),9);

  const latestStories = sortedDate.slice(30, 39);

  return (
    <div className="px-8">
      <NewsletterModal />

      <HomeGrid articles={homeGrid} />

      <OscarsSection title={"FASHION & STYLE"} articles={fashionStyle} />

      <CelebrityStyleSection
        title={"CELEBRITY STYLE"}
        articles={celebrity}
      />

      <OscarsSection title={"TRENDING NOW"} articles={trendingNow} />

      <MustRead title={"MUST READ"} articles={mustRead} />

      <OscarsSection title={"NEXT GEN"} articles={nextGen} />

      <OscarsSection title={"BUSINESS & POWER"} articles={businessSection} />

      <OscarsSection
        title={"CULTURE & LIVING"}
        articles={cultureLiving}
      />

      <Latest articles={latestStories} />
    </div>
  );
}



// import CelebrityStyleSection from "./component/CelebrityStyle";
// import HomeGrid from "./component/HomeGrid";
// import MustRead from "./component/MustRead";
// import OscarsSection from "./component/OscarSection";
// import data from "@/data/data.json";
// // import ShopSection from "./component/ShopSection";
// import Latest from "./component/Latest";
// import NewsletterModal from "./component/NewsLetterModal";

// export default function Home() {
//   const sortedDate = data.articles.sort ((a,b) => new Date(b.date) - new Date(a.date));
//   const homeGrid = sortedDate.slice(0,7)
//   const articles = sortedDate.slice(7,15);
//   const celebrity = sortedDate.slice(15,19);
//   const style = sortedDate.slice(19,24);
//   const mustRead = sortedDate.slice(24,27);
//   const articles1 = sortedDate.slice(26,32);
//   const latestStories = sortedDate.slice(32,41)

//   return (
//     <div className="px-8">
//       <NewsletterModal />
//       <HomeGrid articles={homeGrid} />
//       <OscarsSection title={"FASHION & STYLE"} articles={articles} />
//       <CelebrityStyleSection title={"CELEBRITY STYLE"} articles={celebrity} />
//       <OscarsSection title={"TRENDING NOW"} articles={style} />
//       <MustRead articles={mustRead} />
//       <OscarsSection title={"Next Gen"} articles={ articles1 } />
//       {/* <ShopSection title={"SHOP THE EDITS"} articles={articles} />
//       <ShopSection title={"Editor Wish Lists"} articles={articles} />
//       <ShopSection title={"Latest Videos"} articles={articles} /> */}
//       <Latest articles={latestStories} />
//     </div>
//   );
// }
