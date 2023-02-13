import Link from "next/link";
import React from "react";
import { FaRegBuilding, FaRegStar } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { IoPeopleOutline, IoPersonCircleOutline } from "react-icons/io5";
import { BiMessageAltDetail } from "react-icons/bi";

export default function Sidebar() {
  const ButtonSide = ({ title, iconEle }: { title: string; iconEle?: any }) => {
    return (
      <Link
        href={"/" + title.replaceAll(" ", "")}
        className="hover:bg-[#475BE8] hover:text-white text-semibold text-slate-500 py-3 w-full flex px-3 rounded-lg transition-all font-medium capitalize items-center gap-x-2"
      >
        {iconEle}
        <p>{title}</p>
      </Link>
    );
  };

  return (
    <div className=" h-screen fixed w-1/6">
      <div className="flex flex-col px-2 py-3 w-full">
        <ButtonSide
          title="dashboard"
          iconEle={<RxDashboard className="w-5 h-5" />}
        />
        <ButtonSide
          title="agent"
          iconEle={<IoPeopleOutline className="w-5 h-5 " />}
        />
        <ButtonSide
          title="property"
          iconEle={<FaRegBuilding className="w-5 h-5" />}
        />
        <ButtonSide
          title="review"
          iconEle={<FaRegStar className="w-5 h-5" />}
        />
        <ButtonSide
          title="message"
          iconEle={<BiMessageAltDetail className="w-5 h-5" />}
        />
        <ButtonSide
          title="my profile"
          iconEle={<IoPersonCircleOutline className="w-5 h-5" />}
        />
      </div>
    </div>
  );
}
