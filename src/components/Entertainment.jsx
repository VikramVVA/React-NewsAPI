import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import { getEntertainmentNews } from "../api/news";

export default function Entertainment() {
  const [newsdata, setNewsdata] = useState([]);
  const loadData = async () => {
    const data = await getEntertainmentNews();
    setNewsdata(data);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Card value={newsdata} category="Entertainment" />
      </div>
    </>
  );
}
