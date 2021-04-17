import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { HeroSection, DisplayType, BlogType } from "@components";

export default function Home() {
  const [viewType, handleViewType] = useState("2");

  return (
    <>
      <Helmet title="home" />
      <HeroSection />
      <DisplayType handleType={type => handleViewType(type)} />
      <BlogType type={viewType} />
    </>
  );
}
