import React, { useState } from "react";
import Avatar from "react-avatar";
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch, IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();
  const navigate = useNavigate();

  // Handle search query submission
  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery.trim().length > 0
    ) {
      navigate(`/search/${searchQuery.trim()}`);
      setSearchQuery("");
    }
  };

  // Handle sidebar toggle
  const handleSidebarToggle = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    } else {
      setIsSidebar(!isSidebar);
    }
  };

  // Toggle the search bar
  const toggleSearchBar = () => setSearchBarVisible(!searchBarVisible);

  // Early return for search bar on mobile view
  if (searchBarVisible) {
    return (
      <div className="flex justify-between fixed top-0 w-full bg-white px-6 py-2 z-10">
        <IoArrowBack
          className="text-2xl cursor-pointer"
          onClick={toggleSearchBar}
        />
        <div className="flex items-center w-full">
          <div className="flex-grow px-4 py-2 border border-gray-400 rounded-l-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button
            className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full hover:bg-gray-200"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <CiSearch size="24px" />
          </button>
          <IoMdMic
            size="42px"
            className="ml-3 border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-between fixed top-0 w-full bg-white px-6 py-2 z-10">
      <div className="flex items-center space-x-4">
        <AiOutlineMenu
          className="text-xl cursor-pointer md:hidden"
          onClick={handleSidebarToggle}
        />
        <img src="/logo.png" alt="Logo" className="w-28 cursor-pointer" />
      </div>
      <div className="hidden md:flex items-center w-1/2">
        <div className="flex-grow px-4 py-2 border border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full hover:bg-gray-200"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size="24px" />
        </button>
        <IoMdMic
          size="42px"
          className="ml-3 border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex space-x-5 items-center">
        <IoIosSearch
          className="text-2xl cursor-pointer md:hidden"
          onClick={toggleSearchBar}
        />
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <Avatar src="/profile.jpg" size="32" round={true} />
      </div>
    </div>
  );
}

export default Navbar;
