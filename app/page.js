import CelebrityStyleSection from "./component/CelebrityStyle";
import HomeGrid from "./component/HomeGrid";
import MustRead from "./component/MustRead";
import OscarsSection from "./component/OscarSection";
import data from "@/data/data.json";
// import ShopSection from "./component/ShopSection";
import Latest from "./component/Latest";
import NewsletterModal from "./component/NewsLetterModal";

export default function Home() {
  const sortedDate = data.articles.sort ((a,b) => new Date(b.date) - new Date(a.date));
  const homeGrid = sortedDate.slice(0,7)
  const articles = sortedDate.slice(7,15);
  const celebrity = sortedDate.slice(15,19);
  const style = sortedDate.slice(19,24);
  const mustRead = sortedDate.slice(24,27);
  const articles1 = sortedDate.slice(26,32);
  const latestStories = sortedDate.slice(32,41)

  return (
    <div className="px-8">
      <NewsletterModal />
      <HomeGrid articles={homeGrid} />
      <OscarsSection title={"OSCAR 2026"} articles={articles} />
      <CelebrityStyleSection title={"CELEBRITY STYLE"} articles={celebrity} />
      <OscarsSection title={"TEEN"} articles={style} />
      <MustRead articles={mustRead} />
      <OscarsSection title={"Love Story: John F. Kennedy Jr. & Carolyn Bessette"} articles={ articles1 } />
      {/* <ShopSection title={"SHOP THE EDITS"} articles={articles} />
      <ShopSection title={"Editor Wish Lists"} articles={articles} />
      <ShopSection title={"Latest Videos"} articles={articles} /> */}
      <Latest articles={latestStories} />
    </div>
  );
}
