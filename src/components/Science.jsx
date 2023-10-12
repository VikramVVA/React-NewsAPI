import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import { getScienceNews } from "../api/news";

export default function Science() {
  const [newsdata, setNewsdata] = useState([]);
  const loadData = async () => {
    const data = await getScienceNews();
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
        <Card value={newsdata} category="Science"/>
      </div>
    </>
  );
}
