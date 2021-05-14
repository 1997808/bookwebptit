import React from "react";
import Banner from "../components/Banner";
import FeatureCat from "../components/FeatureCat";
import BestSelling from "../components/BestSelling";
import Recommend from "../components/Recommend";
import NewRelease from "../components/NewRelease";
import { useSelector } from "react-redux";

export default function Index() {
  const allBookData = useSelector((state) => state.book.book);
  const newBookData = useSelector((state) => state.book.newBook);

  return (
    <div className="">
      <Banner />
      <FeatureCat />
      <NewRelease newBookData={newBookData} />
      <BestSelling allBookData={allBookData} />
      <Recommend allBookData={allBookData} />
    </div>
  );
}
