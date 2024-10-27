"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowIcon } from "./Icon";
import CenteredText from "./CenterText";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative  md:my-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CenteredText
          text=" Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book."
          title="Mall Of: Endless Possibilities"
        />
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <div className="relative w-full h-full">
              <Image
                src="/imgs/vedio-bg.png"
                alt="Video thumbnail"
                fill
                className="w-full h-full object-cover"
              />
              <button
                onClick={handlePlayClick}
                className="absolute top-1/2 border border-white left-1/2 transform -translate-x-1/2 -translate-y-1/2  hover:bg-white/40 rounded-full p-4 bg-white transition-all duration-300"
              >
                <svg
                  className="w-12 h-12 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          ) : (
            <video
              className="w-full h-full"
              autoPlay
              controls
              src="https://www.youtube.com/results?search_query=short+cartoon++30+sec"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <div className="card-bg rounded-lg p-6  justify-between backdrop-blur-sm">
            <span className="text-gray-400">25 JUN/2023</span>
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-white  font-inter text-xl font-medium">
                Get your General Access Ticket
              </h2>
              <button className="p-2 rounded-full bg-transparent hover:bg-green-900/50 transition-colors duration-300">
                <ArrowIcon />
              </button>
            </div>
            <p className="my-3 text-white  font-inter text-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum has been the industry’s standard
              dummy text e
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
