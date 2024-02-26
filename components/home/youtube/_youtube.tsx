import { NextPage } from "next";

const YoutubePage: NextPage = () => {
  return (
    <div>
      <iframe
        width="960"
        height="415"
        src="https://www.youtube.com/embed/wp-qZ5V3B0k?autoplay=1" // autoplay=1 추가
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubePage;
