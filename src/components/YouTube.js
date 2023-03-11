import React, { useEffect, useState } from "react";
import VideoCard from "./atoms/VideoCard";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

const CHANNEL_ID = process.env.GATSBY_YOUTUBE_CHANNEL_ID;
const API_KEY = process.env.GATSBY_YOUTUBE_API_KEY;
const videoIds = [
  "UE7fWtHOInU",
  "IVgVorXiSVk",
  "cWYnhFubaZE",
  "TX1VQVH8-1U",
  "y-uekyaAWh8",
  "zSEE12SZduw",
  "zGruUTOPVck",
  "lfwIlKPllvg",
  "6RWbw_-vNE0",
];

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const YouTube = () => {
  const [profile, setProfile] = useState(null);
  const [videos, setVideos] = useState(new Array(videoIds.length).fill({}));

  useEffect(() => {
    async function fetchVideos() {
      const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${CHANNEL_ID}&key=${API_KEY}`;
      let res = await fetch(url);
      res = await res.json();
      console.log(res);

      const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds.join()}&key=${API_KEY}`;
      let vidRes = await fetch(videoUrl);
      vidRes = await vidRes.json();
      console.log(vidRes);

      if (res.items) {
        setProfile(res.items[0]);
      }
      if (vidRes.items) {
        setVideos(vidRes.items);
      }
    }
    fetchVideos();
  }, []);

  return (
    <div className="section" id="youtube">
      <div className="container">
        <div className="youtube-container">
          <Fade bottom cascade>
            <div className="container profile-container">
              <h1>{data.youtubeHeading}</h1>
              <a
                href="https://www.youtube.com/timtan1"
                target="_blank"
                rel="noopener noreferrer"
                className="info"
              >
                {profile ? (
                  <img src={profile.snippet.thumbnails.high.url} alt="Avatar" />
                ) : (
                  <img src="https://i.stack.imgur.com/l60Hf.png" alt="Avatar" />
                )}
                <div>
                  <h2>Tim Tan</h2>
                  <h3>
                    {profile
                      ? numberWithCommas(profile.statistics.subscriberCount)
                      : 0}{" "}
                    subscribers
                  </h3>
                </div>
              </a>
            </div>
          </Fade>
          <div className="grid">
            <Fade bottom cascade>
              {videos.map((item) =>
                item.id ? (
                  <VideoCard
                    key={item.id}
                    heading={item.snippet.title}
                    paragraph={item.snippet.description.split("\n")[0]}
                    imgUrl={item.snippet.thumbnails.maxres.url}
                    views={item.statistics.viewCount}
                    date={item.snippet.publishedAt}
                    projectLink={`https://www.youtube.com/watch?v=${item.id}`}
                  />
                ) : (
                  <VideoCard />
                )
              )}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
