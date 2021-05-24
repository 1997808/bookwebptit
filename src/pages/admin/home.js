import React from "react";
import Overview from "../../components/Admin/overview";
import ChartOverview from "../../components/Admin/chartOverview";
import MostOrder from "../../components/Admin/mostOrder";
import { useSelector } from "react-redux";

export default function Home() {
  const book = useSelector((state) => state.book.book);

  return (
    <>
      <Overview />
      <div className="grid grid md:grid-cols-2 xl:grid-cols-3 gap-8 py-8">
        <div className="col-span-2 p-10 bg-white">
          <ChartOverview />
        </div>
        <div className="hidden xl:col-span-1 xl:block p-10 bg-white">
          <MostOrder book={book} />
        </div>
      </div>
    </>
  );
}
