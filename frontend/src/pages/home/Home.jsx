import Header from "../../component/header/Header";
import Postes from "../../component/posts/Postes";
import Grid from "../../component/grid/Grid";
import Search from "../../component/search/Search";

import "./home.css";
import TopBar from "../../component/topbar/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      {/* <Header /> */}

      <div className="homePostsDiv">
        <Grid />
      </div>
    </>
  );
}
