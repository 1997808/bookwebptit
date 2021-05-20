import React from "react";
import Overview from "../../components/Admin/overview";
import ChartOverview from "../../components/Admin/chartOverview";
import MostOrder from "../../components/Admin/mostOrder";

export default function Home() {
  return (
    <>
      <Overview />
      <div className="grid grid md:grid-cols-2 xl:grid-cols-3 gap-8 py-8">
        <div className="col-span-2 p-10 bg-white">
          <ChartOverview />
        </div>
        <div className="hidden xl:col-span-1 xl:block p-10 bg-white">
          <MostOrder />
        </div>
      </div>
    </>
  );
}
