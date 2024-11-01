"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="container pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="md:px-12">
        <SectionTitle
          subtitle="Features"
          title="Innovative Solutions for Smarter Healthcare"
          paragraph="Transforming the way medical professionals work with cutting-edge technology that drives accuracy, efficiency and seamless workflows"
          center
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
