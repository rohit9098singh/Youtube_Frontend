import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestedVideo from "./SuggestedVideo";
import { BsFillCheckCircleFill } from "react-icons/bs";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const fetchVideoDetails = async () => {
    const res = await fetchData(`video/details/?id=${id}`);
    setVideo(res);
  };

  const fetchRelatedVideos = async () => {
    const res = await fetchData(`video/related-contents/?id=${id}`);
    setRelatedVideos(res);
  };

  return (
    <div className="flex flex-col lg:flex-row mt-16 h-screen">
      {/* Main Content */}
      <div className="flex-1 px-6 ml-6 py-5">
        {/* Video Player */}
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[550px] bg-black rounded-lg overflow-hidden">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            width="100%"
            height="100%"
            controls
            playing={true}
          />
        </div>

        {/* Video Details */}
        <div className="mt-4">
          <h1 className="text-lg md:text-xl font-bold line-clamp-2">{video?.title}</h1>
          <div className="flex justify-between items-start mt-4">
            {/* Channel Info */}
            <div className="flex items-center space-x-4">
              <img
                src={video?.author?.avatar[0]?.url}
                alt="Author"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-md font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-gray-500 text-sm ml-1" />
                  )}
                </p>
                <p className="text-sm text-gray-600">{video?.author?.stats?.subscribersText}</p>
              </div>
              <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-full hover:bg-red-600">
                Subscribe
              </button>
            </div>

            {/* Video Stats */}
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
                <AiOutlineLike className="text-xl text-gray-600" />
                <span>{abbreviateNumber(video?.stats?.likes, 2)} Likes</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
                <span>{abbreviateNumber(video?.stats?.views, 2)} Views</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 bg-gray-100 p-4 rounded-lg text-sm">{video?.description}</p>

          {/* Comments Section */}
          <div className="mt-4 text-lg font-semibold">
            {video?.stats?.comments || 0} Comments
          </div>
        </div>
      </div>

      {/* Related Videos */}
      <div className="w-full lg:w-[350px] xl:w-[400px] px-4 py-4 overflow-y-auto h-full bg-gray-50">
        {relatedVideos?.contents?.map((item, index) => {
          if (item?.type !== "video") return null;
          return <SuggestedVideo key={index} video={item?.video} />;
        })}
      </div>
    </div>
  );
}

export default PlayingVideo;
