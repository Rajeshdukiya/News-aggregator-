import React from "react";
import NewsCard from "../Components/NewsCard";

const HomePage = () => {
  return (
    <div >
      <div className="mb-5 mt-5 gap-2 flex flex-wrap justify-around">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div className="mb-5 mt-5 gap-2 flex flex-wrap justify-around">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div className="mb-5 mt-5 gap-2 flex flex-wrap justify-around">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default HomePage;
