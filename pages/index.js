import React from 'react';
import Hero from '../components/Home/Hero';
import KeyFeatures from '../components/Home/KeyFeatures';
import CourseDetails from '../components/Home/CourseDetails';
import StartLearningCTA from '../components/Home/StartLearningCTA';
import Pricing from '../components/Home/Pricing';
import TestimonialTweets from '../components/Home/TestimonialsTweets';
import ReadyToBuild from '../components/Home/ReadyToBuildCTA';
import FAQ from '../components/Home/FAQ';
import LetsTalk from '../components/Home/LetsTalk';
import LayoutHome from '../components/Home/Layout';

function Home(props) {
  return (
    <LayoutHome>
      <main>
        <Hero />
        <KeyFeatures />
        <CourseDetails />
        <StartLearningCTA />
        <Pricing />
        <TestimonialTweets />
        <ReadyToBuild />
        <FAQ />
        <LetsTalk />
      </main>
    </LayoutHome>
  );
}

export default Home;
