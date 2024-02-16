import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponenet = () => {
  return (
    <div class="stats-section">
      <div class="stats-container">
        <div class="grid-container">
          {Stats.map((data, index) => {
            return (
              <div class="stat" key={index}>
                <h1 class="count">{data.count}</h1>
                <h2 class="label-h2">{data.label}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponenet;
