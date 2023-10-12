import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import { getHealthNews } from "../api/news";

export default function Health(props) {
  const [newsdata, setNewsdata] = useState([]);
  const loadData = async () => {
    const data = await getHealthNews();
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
        <Card value={newsdata} category="Health" />
      </div>
    </>
  );
}
