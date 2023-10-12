import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import { getSportsNews } from "../api/news";

export default function Sports() {
  const [newsdata, setNewsdata] = useState([]);
  const loadData = async () => {
    const data = await getSportsNews();
    setNewsdata(data)
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
        <Card value={newsdata} category="Sports" />
      </div>
    </>
  );
}
