import React, { useEffect, useState } from "react";
import HeatMap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./customHeatmap.css";
import { LeetcodeSection } from "./LeetcodeSection";

const Heatmap = () => {
  const [leetcodeData, setLeetcodeData] = useState([]);

  useEffect(() => {
    const username = "R-i-s-h-i-"; // your LeetCode username
    fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`)
      .then((res) => res.json())
      .then((data) => {
        const raw = JSON.parse(data.submissionCalendar);
        const parsed = Object.entries(raw).map(([ts, count]) => ({
          date: new Date(Number(ts) * 1000).toISOString().split("T")[0],
          count,
        }));
        setLeetcodeData(parsed);
        console.log("Parsed data:", parsed); // See full data in console
      });
  }, []);

  const classForValue = (value) => {
    if (!value || value.count === 0) return "heatmap-empty";
    if (value.count < 3) return "heatmap-scale-1";
    if (value.count < 5) return "heatmap-scale-2";
    if (value.count < 7) return "heatmap-scale-3";
    return "heatmap-scale-4";
  };

  return (
    <div id="leetcode" className="py-24 px-4 relative justify-center ">
        <h2 className="text-3xl text-white md:text-4xl font-bold mb-12 text-center text-primary">
        LeetCode <span className="text-white">Activity</span>
      </h2>
    <div className="container justify-center max-w-3xl grid grid-cols-1 md:grid-cols-1 gap-6">
        <div className="">
            {!leetcodeData.length ? (
                <p className="text-center text-sm text-gray-400">Loading activity...</p>
            ) : (
    <HeatMap
      startDate={new Date("2025-06-01")}  // or dynamic date
      endDate={new Date()}
      values={leetcodeData}
      classForValue={classForValue}
      gutterSize={1}
    />
  )}

  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-neutral-800 text-white text-xs px-3 py-2 rounded-md shadow-md z-10 w-max max-w-xs text-center">
    There are limited number of requests on this API :)
  </div>
</div>

    </div>
    </div>
  );
};

export default Heatmap;
