import { Accordion, Container, Title } from '@mantine/core';
import classes from './index.module.css';

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
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        {faqData.map((item, index) => (
          <Accordion.Item key={index} className={classes.item} value={`faq-${index}`}>
            <Accordion.Control>{item.title}</Accordion.Control>
            <Accordion.Panel>{item.content}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}