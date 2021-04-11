import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
// import Categories from "../components/Categories"
import FeatureCat from "../components/FeatureCat"
import BestSelling from "../components/BestSelling"
import Recommend from "../components/Recommend"
import NewRelease from "../components/NewRelease"

export default function Index() {
  return (
    <div className="">
      <Header />
      <Banner />
      <FeatureCat />
      <NewRelease />
      <BestSelling />
      <Recommend />
      <Footer />
    </div>
  )
}