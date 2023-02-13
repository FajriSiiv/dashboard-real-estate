"use client";
import { ArcElement, Legend, Tooltip, Chart as ChartJS } from "chart.js";
import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Components() {
  const data = {
    min: 60,
    max: 30,
  };

  const options = {
    tooltip: {
      enabled: false, // <-- this option disables tooltips
      interaction: {
        intersect: false,
      },
    },
    datasets: [
      {
        label: "Data",
        backgroundColor: ["rgba(255,99,132,0.2)", "#E4E8EF"],
        borderColor: ["rgba(255,99,132,0.2)", "#E4E8EF"],
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [data.min, data.max],
      },
    ],
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex w-full relative py-2 gap-4">
        <div className="w-1/4 bg-white p-2 rounded-md">
          <div className="w-[95%] mx-auto flex justify-between h-20">
            <div className="flex flex-col">
              <span>Properties for Sale</span>
              <p className="font-bold">603</p>
            </div>
            <Doughnut data={options} />
          </div>
        </div>
        <div className="w-1/4 bg-white p-2 rounded-md">
          <div className="w-[95%] mx-auto justify-between flex h-20">
            <div className="flex flex-col ">
              <span>Properties for Sale</span>
              <p className="font-bold">603</p>
            </div>
            <Doughnut data={options} />
          </div>
        </div>
        <div className="w-1/4 bg-white p-2 rounded-md">
          <div className="w-[95%] mx-auto justify-between flex h-20">
            <div className="flex flex-col ">
              <span>Properties for Sale</span>
              <p className="font-bold">603</p>
            </div>
            <Doughnut data={options} />
          </div>
        </div>
        <div className="w-1/4 bg-white p-2 rounded-md">
          <div className="w-[95%] mx-auto justify-between flex h-20">
            <div className="flex flex-col ">
              <span>Properties for Sale</span>
              <p className="font-bold">603</p>
            </div>
            <Doughnut data={options} />
          </div>
        </div>
      </div>
    </div>
  );
}
