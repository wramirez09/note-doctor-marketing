const SingleFaq = (props: { question: string; answer: string }) => {
  const { question, answer } = props;

  return (
    <>
      <div className="mb-12 flex lg:mb-[70px]">
        <div className="w-full">
          {/* <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {question}
          </h3> */}
          <p className="text-base text-body-color dark:text-dark-6">{answer}</p>
        </div>
      </div>
    </>
  );
};

export default SingleFaq;
