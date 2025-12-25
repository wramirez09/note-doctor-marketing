import Link from "next/link";

const Breadcrumb = ({
  pageName,
  pageDescription,
}: {
  pageName: string;
  pageDescription?: string;
}) => {
  return (
    <>
      <div className="relative z-10 overflow-hidden dark:bg-dark py-7">
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3"></div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="text-right">
                {/* <h1 className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  {pageName}
                </h1> */}
                <p className=" mb-5 text-xs text-body-color dark:text-dark-6">
                  {pageDescription}
                </p>

                <ul className="hidden items-center justify-end gap-[10px]">
                  <li>
                    <Link
                      href="/"
                      className="flex items-center gap-[10px] text-xs font-medium text-dark dark:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <p className="flex items-center gap-[10px] text-xs font-medium text-body-color">
                      <span className="text-body-color dark:text-dark-6">
                        {" "}
                      </span>
                      {pageName}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
