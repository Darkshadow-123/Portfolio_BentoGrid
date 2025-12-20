import React, { useEffect, useState } from "react";
import HeatMap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./customHeatmap.css";

const LEETCODE_USER =import.meta.env.VITE_LEETCODE_USER
const GITHUB_USER =import.meta.env.VITE_GITHUB_USER

const HEATMAP_RANGES = {
  leetcode: {
    start: new Date("2025-06-01"),
    end: new Date("2025-09-31"),
  },
  github: {
    start: new Date("2025-09-01"),
    end: new Date("2025-12-31"),
  },
};

const ActivityHeatmap = () => {
  const [active, setActive] = useState("leetcode");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (active === "leetcode") {
      fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USER}/calendar`)
        .then((res) => res.json())
        .then((data) => {
          const raw = JSON.parse(data.submissionCalendar);
          const parsed = Object.entries(raw).map(([ts, count]) => ({
            date: new Date(Number(ts) * 1000).toISOString().split("T")[0],
            count,
          }));
          setData(parsed);
          setLoading(false);
        });
    }

    if (active === "github") {
      fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}`)
        .then((res) => res.json())
        .then((data) => {
          const parsed = data.contributions.map((item) => ({
            date: item.date,
            count: item.count,
          }));
          setData(parsed);
          setLoading(false);
        });
    }
  }, [active]);

  const classForValue = (value) => {
    if (!value || value.count === 0) return "heatmap-empty";
    if (value.count < 3) return "heatmap-scale-1";
    if (value.count < 5) return "heatmap-scale-2";
    if (value.count < 7) return "heatmap-scale-3";
    return "heatmap-scale-4";
  };

  return (
    <section id="activity" className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
        <span className="text-white">Coding Activity</span>
      </h2>

      {/* Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-neutral-900 p-1 rounded-full flex gap-1">
          <button
            onClick={() => setActive("leetcode")}
            className={`px-5 py-2 text-sm rounded-full transition ${
              active === "leetcode"
                ? "bg-purple-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            LeetCode
          </button>

          <button
            onClick={() => setActive("github")}
            className={`px-5 py-2 text-sm rounded-full transition ${
              active === "github"
                ? "bg-purple-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            GitHub
          </button>
        </div>
      </div>

      {/* Heatmap */}
      <div className="container max-w-3xl mx-auto">
        {loading ? (
          <p className="text-center text-sm text-gray-400">
            Loading {active} activity...
          </p>
        ) : (
          <HeatMap
            startDate={HEATMAP_RANGES[active].start}
            endDate={HEATMAP_RANGES[active].end}
            values={data}
            classForValue={classForValue}
            gutterSize={1}
          />
        )}
      </div>

      {/* API notice */}
      <p className="mt-4 text-center text-xs text-gray-500">
        Note: Public APIs may have request limits
      </p>
    </section>
  );
};

export default ActivityHeatmap;
