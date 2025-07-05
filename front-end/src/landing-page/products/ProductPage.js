import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURl="media/images/kite.png"
        topic="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURl="media/images/console.png"
        topic="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />

      <LeftSection
        imageURl="media/images/coin.png"
        topic="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURl="media/images/kiteconnect.png"
        topic="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />

      <LeftSection
        imageURl="media/images/varsity.png"
        topic="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <p className="text-center  mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech blog.
      </p>

      <Universe />
    </>
  );
}

export default ProductPage;
