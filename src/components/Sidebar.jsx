import React from "react";
import { GoHome } from "react-icons/go";
import {
  SiYoutubeshorts,
  SiYoutubemusic,
  SiYoutubestudio,
  SiYoutubekids,
  SiTrendmicro,
} from "react-icons/si";
import {
  MdOutlineSubscriptions,
  MdHistory,
  MdOutlineWatchLater,
  MdPodcasts,
} from "react-icons/md";
import {
  PiUserSquareThin,
  PiFilmSlateLight,
  PiLightbulbLight,
} from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight, FaYoutube, FaRegNewspaper } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgMediaLive } from "react-icons/cg";
import { TfiCup } from "react-icons/tfi";
import { SiStylelint } from "react-icons/si";
import { BiVideo } from "react-icons/bi";
import { useUtils } from "../context/UtilsContext";

function Sidebar() {
  const { isSidebar, mobileShow, setMobileShow } = useUtils();

  const allSidebarItems = [
    {
      groupName: "Home",
      groupItems: [
        { id: 1, name: "Home", icon: <GoHome /> },
        { id: 2, name: "Shorts", icon: <SiYoutubeshorts /> },
        { id: 3, name: "Subscriptions", icon: <MdOutlineSubscriptions /> },
      ],
    },
    {
      groupName: "You",
      groupItems: [
        { id: 1, name: "Your Channel", icon: <PiUserSquareThin /> },
        { id: 2, name: "History", icon: <MdHistory /> },
        { id: 3, name: "Playlists", icon: <MdOutlineSubscriptions /> },
        { id: 4, name: "Your Videos", icon: <BiVideo /> },
        { id: 5, name: "Watch Later", icon: <MdOutlineWatchLater /> },
        { id: 6, name: "Liked Videos", icon: <AiOutlineLike /> },
      ],
    },
    {
      groupName: "Explore",
      groupItems: [
        { id: 1, name: "Trending", icon: <SiTrendmicro /> },
        { id: 2, name: "Shopping", icon: <HiOutlineShoppingBag /> },
        { id: 3, name: "Music", icon: <SiYoutubemusic /> },
        { id: 4, name: "Films", icon: <PiFilmSlateLight /> },
        { id: 5, name: "Live", icon: <CgMediaLive /> },
        { id: 6, name: "Gaming", icon: <IoGameControllerOutline /> },
        { id: 7, name: "News", icon: <FaRegNewspaper /> },
        { id: 8, name: "Sport", icon: <TfiCup /> },
        { id: 9, name: "Courses", icon: <SiStylelint /> },
        { id: 10, name: "Fashion & Beauty", icon: <PiLightbulbLight /> },
        { id: 11, name: "Podcasts", icon: <MdPodcasts /> },
      ],
    },
    {
      groupName: "More From YouTube",
      groupItems: [
        { id: 1, name: "YouTube Premium", icon: <FaYoutube /> },
        { id: 2, name: "YouTube Studio", icon: <SiYoutubestudio /> },
        { id: 3, name: "YouTube Music", icon: <SiYoutubemusic /> },
        { id: 4, name: "YouTube Kids", icon: <SiYoutubekids /> },
      ],
    },
  ];

  // Overlay for mobile sidebar
  const ModelOverlay = () => {
    return (
      <div
        className="flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
        onClick={() => {
          setMobileShow(!mobileShow);
        }}
      ></div>
    );
  };

  return (
    <>
      <div>
        <div
          className={`${
            mobileShow
              ? "fixed top-0 bottom-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]"
              : "hidden h-[calc(100vh-6.625rem)] w-[88%]"
          } xl:static xl:block px-2 lg:px-6 overflow-y-scroll overflow-x-hidden scrollbar-thin`}
        >
          {/* Sidebar Groups */}
          <div className="space-y-3 items-center">
            {allSidebarItems.map((group) => (
              <div key={group.groupName}>
                <h1 className="text-sm font-bold text-gray-600 mb-2">
                  {group.groupName}
                </h1>
                <div className="space-y-3">
                  {group.groupItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-2 cursor-pointer"
                    >
                      <div className="text-xl">{item.icon}</div>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <br />
          <hr />
          <span className="text-xs text-gray-600 font-semibold">
            About Press Copyright <br /> Contact us Creators <br /> Advertise
            Developers <br />
            <p className="mt-3">Terms Privacy Policy & Safety</p> How YouTube
            works <br /> Test new features
          </span>
          <br />
          <p className="text-xs text-gray-500 mt-3">© 2024 My App</p>
        </div>
      </div>
      {mobileShow ? <ModelOverlay /> : null}
    </>
  );
}

export default Sidebar;
