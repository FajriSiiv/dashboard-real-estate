import React from "react";

import { IoMdNotificationsOutline } from "react-icons/io";

export default function Header() {
  const PlaceHol = () => {
    return (
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        laudantium maxime nulla, quisquam consectetur doloremque amet eligendi
        illo et voluptatibus. Non ab assumenda, quia pariatur quisquam possimus
        aspernatur officiis hic.
      </div>
    );
  };

  return (
    <div className="flex p-3 ">
      <div className="w-1/6">
        <span className="text-xl font-bold">Portery</span>
      </div>
      <div className="w-5/6 flex justify-center items-center ">
        <div className="w-1/2">
          <div className="flex justify-start items-center w-2/3">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md bg-gray-100 w-full"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center gap-x-3 ">
          <span className="flex relative ">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-rose-400 opacity-75 top-0 right-1 "></span>
            <span className="absolute  top-0 inline-flex rounded-full h-3 w-3 bg-rose-500 right-1 "></span>
            <IoMdNotificationsOutline className="w-7 h-7" />
          </span>
          <div className="flex justify-center items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-500"></div>
            <div className="flex flex-col mr-10">
              <p className="text-bold text-sm">Name Peps</p>
              <span className="text-gray-300 text-xs">Jobs Desk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
