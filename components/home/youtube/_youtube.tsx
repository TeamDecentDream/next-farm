import { NextPage } from "next";

interface YoutubePageProps {
  src: string;
  width: string;
  height: string;
}

const YoutubePage: NextPage<YoutubePageProps> = ({ src, width, height }) => {
  return (
    <div>
      <iframe
        width={width}
        height={height}
        src={src}
        title="YouTube video player"
        frameBorder={0}
        style={{ border: "0" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubePage;
