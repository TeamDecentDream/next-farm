import { NextPage } from "next";

const YoutubePage: NextPage = () => {
  return (
    <div>
      <iframe
        width="960"
        height="415"
        src="https://www.youtube.com/embed/hNOfV4Q1tvA"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubePage;
