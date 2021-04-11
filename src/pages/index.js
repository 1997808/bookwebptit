import React from "react"

import Banner from "../components/Banner"
import FeatureCat from "../components/FeatureCat"
import BestSelling from "../components/BestSelling"
import Recommend from "../components/Recommend"
import NewRelease from "../components/NewRelease"

export default function Index() {
  return (
    <div className="">
      <Banner />
      <FeatureCat />
      <NewRelease />
      <BestSelling />
      <Recommend />
    </div>
  )
}