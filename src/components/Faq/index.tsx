'use client';
import { Accordion, Blockquote, Container, Title } from '@mantine/core';
import classes from './index.module.css';
import { motion } from 'framer-motion';
import SectionTitle from '../Common/SectionTitle';

const faqData: {title: string; content: string}[] = [
  {
    title: "What is prior authorization?",
    content: "Prior authorization is a review process used by health plans and insurance companies to determine whether a requested medical service, procedure, or medication is medically necessary and appropriate based on established clinical guidelines."
  },
  {
    title: "How is medical necessity determined?",
    content: "Medical necessity is determined using evidence-based clinical guidelines and standards of care. These guidelines help ensure that treatments are safe, effective, and appropriate for a patient's condition."
  },
  {
    title: "Which medical necessity guidelines do insurance companies use?",
    content: "Insurance plans may use one or more of the following guideline sources:\n\nMedicare guidelines, including:\n\nNational Coverage Determinations (NCDs)\n\nLocal Coverage Determinations (LCDs)\n\nMedicare policies\n\nInternal health plan or insurance company policies\n\nThird-party clinical guidelines, commonly from:\n\nMCG (Milliman Care Guidelines)\n\nEvolent\n\nCarelon\nEviCore\n\nInterQual\n\nNational Comprehensive Cancer Network (NCCN)"
  },
  {
    title: "How do insurance plans decide which guideline to use?",
    content: "Insurance companies follow a guideline hierarchy that varies by plan type.\n\nMedicare and Medicare Advantage plans typically use:\n\nMedicare National Coverage Determinations (NCDs)\n\nMedicare Local Coverage Determinations (LCDs), based on state\n\nMedicare policies, if applicable\n\nInternal health plan or insurance policies\n\nThird-party guidelines (MCG, eviCore, InterQual, Carelon, etc.)\n\nProfessional society guidelines\n\nCommercial insurance plans typically use:\n\nInternal health plan or insurance policies\n\nThird-party guidelines (MCG, eviCore, InterQual, Carelon, etc.)\n\nProfessional society guidelines"
  },
  {
    title: "How does out-of-network coverage affect prior authorization?",
    content: "Health plans have in-network providers that are contracted with the insurance company. Members are encouraged to receive care from these providers whenever possible.\n\nOut-of-network services are a common reason for prior authorization denials, especially for referrals. While many referrals are approved, denials often occur when the requested provider is not contracted or considered out-of-network."
  },
  {
    title: "How can providers access prior authorization guidelines?",
    content: "Providers—including physicians, hospitals, clinics, and advanced practice providers (NPs and PAs)—can access prior authorization and medical necessity guidelines through individual insurance or health plan websites.\n\nCommon challenge:\nGuidelines are often published as large PDF documents, making them difficult to search, interpret, and apply efficiently in clinical workflows."
  }
]


export function Faq() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <section className="container relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[50px]">
        <Container className={classes.hrContainer}>
          <hr />
        </Container>
        <Container size="lg">
          <div className="mt-12 md:px-12">
            <SectionTitle
              subtitle=""
              title="What Physicians Are Saying"
              paragraph=""
              width="640px"
              center
            />

            <div className="-mx-4 mb-7 mt-[60px] flex flex-wrap lg:mt-20">
              <div className="mb-9 w-full px-4 lg:w-1/2">
                <Blockquote color="blue" icon={icon} mt="xl" c={"white"}>
                  We don’t actually know what piece of information the insurer is
                  looking for.
                </Blockquote>
              </div>

              <div className="mb-9 w-full px-4 lg:w-1/2">
                <Blockquote color="blue" icon={icon} mt="xl" c={"white"}>
                  It’s a huge diversion of time and resources.
                </Blockquote>
              </div>
              <div className="mb-9 w-full px-4 lg:w-1/2">
                <Blockquote color="blue" icon={icon} mt="xl" c={"white"}>
                  Many of us have staff who do nothing but focus on prior
                  authorization paperwork.
                </Blockquote>
              </div>
              <div className="mb-9 w-full px-4 lg:w-1/2">
                <Blockquote color="blue" icon={icon} mt="xl" c={"white"}>
                  Prior Auth is a guessing game
                </Blockquote>
              </div>
            </div>
            <div className="mb-11 mt-9">
              <p className="text-white">
                <strong>
                  From article: What doctors wish patients knew about prior
                  authorization
                </strong>
              </p>
              <cite className="text-white dark:text-dark-6">
                <a href="https://www.ama-assn.org/practice-management/prior-authorization/what-doctors-wish-patients-knew-about-prior-authorization">
                  https://www.ama-assn.org/practice-management/prior-authorization/what-doctors-wish-patients-knew-about-prior-authorization
                </a>
              </cite>
            </div>
            <SectionTitle
              subtitle="This cycle leaves patients without timely treatment — raising hospitalization risk and worsening outcomes."
              title="&nbsp;"
              paragraph="&nbsp;"
              width="640px"
              center
            />
          </div>
        </Container>
        <div>
          <span className="absolute left-4 top-4 -z-[1]">
            <svg
              width="48"
              height="134"
              viewBox="0 0 48 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="45.6673"
                cy="132"
                r="1.66667"
                transform="rotate(180 45.6673 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 45.6673 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 45.6673 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 45.6673 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="73.3335"
                r="1.66667"
                transform="rotate(180 45.6673 73.3335)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 45.6673 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 45.6673 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 45.6673 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 45.6673 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 45.6673 1.66683)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="132"
                r="1.66667"
                transform="rotate(180 31.0013 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 31.0013 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 31.0013 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 31.0013 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="73.3335"
                r="1.66667"
                transform="rotate(180 31.0013 73.3335)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 31.0013 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 31.0013 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 31.0013 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 31.0013 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0013"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 31.0013 1.66683)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="132"
                r="1.66667"
                transform="rotate(180 16.3333 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 16.3333 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 16.3333 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 16.3333 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="73.3335"
                r="1.66667"
                transform="rotate(180 16.3333 73.3335)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 16.3333 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 16.3333 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 16.3333 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 16.3333 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3333"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 16.3333 1.66683)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="132"
                r="1.66667"
                transform="rotate(180 1.66732 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 1.66732 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 1.66732 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 1.66732 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="73.3335"
                r="1.66667"
                transform="rotate(180 1.66732 73.3335)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 1.66732 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 1.66732 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 1.66732 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 1.66732 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 1.66732 1.66683)"
                fill="#5ab1ff"
              />
            </svg>
          </span>
          <span className="absolute bottom-4 right-4 -z-[1]">
            <svg
              width="48"
              height="134"
              viewBox="0 0 48 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="45.6673"
                cy="132"
                r="1.66667"
                transform="rotate(180 45.6673 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 45.6673 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 45.6673 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 45.6673 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 45.6673 73.3333)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 45.6673 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 45.6673 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 45.6673 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 45.6673 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="45.6673"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 45.6673 1.66683)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0006"
                cy="132"
                r="1.66667"
                transform="rotate(180 31.0006 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0006"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 31.0006 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0006"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 31.0006 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0006"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 31.0006 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0008"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 31.0008 73.3333)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0008"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 31.0008 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0008"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 31.0008 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0008"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 31.0008 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0008"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 31.0008 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="31.0008"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 31.0008 1.66683)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3341"
                cy="132"
                r="1.66667"
                transform="rotate(180 16.3341 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3341"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 16.3341 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3341"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 16.3341 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3341"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 16.3341 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3338"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 16.3338 73.3333)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3338"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 16.3338 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3338"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 16.3338 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3338"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 16.3338 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3338"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 16.3338 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="16.3338"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 16.3338 1.66683)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="132"
                r="1.66667"
                transform="rotate(180 1.66732 132)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 1.66732 117.333)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 1.66732 102.667)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 1.66732 88.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 1.66732 73.3333)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 1.66732 45.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 1.66732 16.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 1.66732 59.0001)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 1.66732 30.6668)"
                fill="#5ab1ff"
              />
              <circle
                cx="1.66732"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 1.66732 1.66683)"
                fill="#5ab1ff"
              />
            </svg>
          </span>
        </div>
      </section>
    </motion.div>
  );
}