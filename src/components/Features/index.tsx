import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="mx-lg:px-40 container mx-auto">
        <SectionTitle
          subtitle="Features"
          title="Innovative Solutions for Smarter Healthcare"
          paragraph="Transforming the way medical professionals work with cutting-edge technology that drives accuracy, efficiency and seamless workflows"
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
        <Link
          className="primary-cta w-1/3 cursor-pointer items-center justify-center rounded-md border border-secondary bg-secondary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:flex"
          href={""}
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Features;
