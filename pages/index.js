import React from "react";
import Header from "../public/components/header";
import Webdoor from "../public/components/webdoor";
import DailyVerse from "../public/components/dailyVerse";
import FiveColours from "../public/components/fiveColours";
import VisitUs from "../public/components/visitUs";
import Footer from "../public/components/footer";

function IndexPage() {
  return (
    <div>
      <Header />
      <Webdoor />
      <DailyVerse />
      <FiveColours />
      <VisitUs />
      <Footer />
    </div>
  );
}

export default IndexPage;
