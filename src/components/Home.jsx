import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import { getGeneralNews } from "../api/news";

export default function Home(props) {
  const [newsdata, setNewsdata] = useState([]);

  const loadData = async () => {
    const data = await getGeneralNews();
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
        <Card value={newsdata} category="General"/>
      </div>
    </>
  );
}
