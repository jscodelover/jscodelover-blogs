import React from "react";

export default function Home() {
  return (
    <section>
      Dark mode is the first feature I added in my website. I really didn’t know
      how to do it at first, especially I’m using Tailwind for my styling. I’m
      sure there are plugins available to use but I want to implement it myself
      in order to learn more about React and CSS. Good thing I came across this
      beautiful article by Josh Comeau: The Quest for the Perfect Dark Mode. Two
      things became clear to me: CSS variables and prefers-color-scheme media
      query. In this post, I will walk you through my process on how to
      implement dark mode in a Gatsby and Tailwind CSS project.
    </section>
  );
}
