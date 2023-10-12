import React from "react";
import Navbar from "./Navbar";
import moment from "moment/moment";

import { useLocation } from "react-router-dom";

export default function Details() {
  const location = useLocation();
  console.log("locations", location);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="w-full">
        <div className="h-1/2 px-2 md:px-6 w-full text-slate-700 dark:text-white flex flex-wrap flex-col items-center border-slate-300">
          <div className="max-w-5xl text-left flex flex-col items-center justify-center md:p-4 md:border border-slate-300 dark:border-slate-600 rounded-xl">
            <div className="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-slate-900">
              <div className="p-2 text-lg font-serif text-blue-700 dark:text-blue-300">
                {location.state.val.author !== null && (
                  <span className="text-red-500">
                    By {location.state.val.author},
                  </span>
                )}
                {moment(location.state.val.publishedAt).format("MMMM Do YYYY")}
              </div>
              <div className="rounded-t-xl w-full h-full shadow-sm bg-cover">
                <img
                  src={location.state.val.urlToImage}
                  alt="img"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full mt-8 p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
                <h1 className="text-left text-sm md:text-lg font-bold leading-normal">
                  {location.state.val.title}
                </h1>
                <p className="text-sm">
                  {location.state.val.content != null
                    ? location.state.val.content
                    : location.state.val.content}
                </p>

                <div className="flex mt-4">
                  <a
                    href={location.state.val.url}
                    target="_blank"
                    className="w-full"
                  >
                    <button className="transition-all duration-100 text-center p-2 rounded-md text-white w-full bg-gradient-to-r from-blue-700 to-blue-500 hover:shadow-md hover:from-blue-800 hover:to-blue-600">
                      Source..
                    </button>
                  </a>
                  {/* <div className="flex flex-col ml-4 w-1/2">
                    <h2 className="text-center text-xs mt-1 mb-2 text-blue-600 dark:text-blue-400 font-bold uppercase">
                      Published At
                    </h2>
                    <span className="self-center text-xs text-blue-700 dark:text-blue-300 -mt-2">
                      {moment(location.state.val.publishedAt).format('MMMM Do YYYY')}
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
