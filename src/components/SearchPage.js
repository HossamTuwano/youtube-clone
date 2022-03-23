import React from "react";
import "../SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon /> <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://animebestseries.com/wp-content/uploads/2021/07/naruto-blog-1024x538.jpg"
        channel="Leaf Ninja"
        verified
        subs="645k"
        noOfVideos={349}
        description="Yoroushkunee! Dattebayo. Welcome to Leaf Ninja the channel to dedicated to show love for Naruto"
      />

      <hr />

      <VideoRow
        views="3.4M"
        subs="464k"
        description="Naruto uses summoning jutsu for the first time"
        timestamp="59 seconds ago"
        channel="Leaf Ninja"
        title="Watch Naruto summons Gamabunta for the first time to escape death"
        image="https://qph.fs.quoracdn.net/main-qimg-62463feb0156a6be79bda313aee2424f"
      />

      <VideoRow
        views="3.4M"
        subs="464k"
        description="Naruto uses summoning jutsu for the first time"
        timestamp="59 seconds ago"
        channel="Leaf Ninja"
        title="Watch Naruto summons Gamabunta for the first time to escape death"
        image="https://qph.fs.quoracdn.net/main-qimg-62463feb0156a6be79bda313aee2424f"
      />

      <VideoRow
        views="3.4M"
        subs="464k"
        description="Naruto uses summoning jutsu for the first time"
        timestamp="59 seconds ago"
        channel="Leaf Ninja"
        title="Watch Naruto summons Gamabunta for the first time to escape death"
        image="https://qph.fs.quoracdn.net/main-qimg-62463feb0156a6be79bda313aee2424f"
      />

      <VideoRow
        views="3.4M"
        subs="464k"
        description="Naruto uses summoning jutsu for the first time"
        timestamp="59 seconds ago"
        channel="Leaf Ninja"
        title="Watch Naruto summons Gamabunta for the first time to escape death"
        image="https://qph.fs.quoracdn.net/main-qimg-62463feb0156a6be79bda313aee2424f"
      />
    </div>
  );
}

export default SearchPage;
