import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Music from "./Music";
import Movies from "./Movies";
import Podcasts from "./Podcasts";
import EBooks from "./Ebooks";
import TVShows from "./TvShows";
import Saved from "./Saved";

function Navbar({
  music,
  movies,
  podcasts,
  saveForLaterFunction,
  ebook,
  tvShow,
  setSaveForLater,
  saveForLater,
  saved,
}) {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 header"
    >
      <Tab eventKey="home" title="Music">
        <Music music={music} saveForLaterFunction={saveForLaterFunction} />
      </Tab>

      <Tab eventKey="movies" title="Movies">
        <Movies
          movies={movies}
          saveForLater={saveForLater}
          saveForLaterFunction={saveForLaterFunction}
        />
      </Tab>

      <Tab eventKey="podcasts" title="Podcasts">
        <Podcasts
          podcasts={podcasts}
          saveForLater={saveForLater}
          saveForLaterFunction={saveForLaterFunction}
        />
      </Tab>

      <Tab eventKey="ebooks" title="eBooks">
        <EBooks
          ebook={ebook}
          saveForLater={saveForLater}
          saveForLaterFunction={saveForLaterFunction}
        />
      </Tab>

      <Tab eventKey="tvshows" title="TV Shows">
        <TVShows
          tvShow={tvShow}
          saveForLater={saveForLater}
          saveForLaterFunction={saveForLaterFunction}
        />
      </Tab>

      <Tab eventKey="Saved" title="Saved">
        <Saved saveForLater={saveForLater} saved={saved} setSaveForLater={setSaveForLater} />
      </Tab>
    </Tabs>
  );
}

export default Navbar;
