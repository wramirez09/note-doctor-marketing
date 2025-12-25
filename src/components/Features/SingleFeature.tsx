import { Feature } from "@/types/feature";
import { rem, useMantineTheme } from "@mantine/core";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const theme = useMantineTheme();

  const { title, paragraph, btn, btnLink, cite } = feature;
  return (
    <div className="mx-auto w-full px-5 md:w-1/3 lg:w-1/3 ">
      <div className="wow fadeInUp group mb-12 bg-white p-5 rounded-lg min-h-[310px] shadow-md hover:shadow-lg" data-wow-delay=".15s">
        <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-gray-200">
          <span className="absolute  left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[0deg] items-center justify-center rounded-2xl bg-gray-200 bg-opacity-20 duration-300 group-hover:rotate-45 shadow-sm">
            <feature.icon
              style={{ width: rem(35), height: rem(35) }}
              stroke={2}
              color={theme.colors.blue[6]}
            />
          </span>
        </div>

        <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
          {title}
        </h3>
        <p className="mb-1 text-body-color dark:text-dark-6">
          {paragraph}
        </p>
        <cite>
          <a href={`${cite}`}>{cite}</a>
        </cite>
      </div>
    </div >
  );
};

export default SingleFeature;
