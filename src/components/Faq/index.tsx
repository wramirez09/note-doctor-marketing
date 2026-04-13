'use client';
import { Accordion, Container, Title } from '@mantine/core';
import classes from './index.module.css';

const faqData: {title: string; content: React.ReactNode}[] = [
  {
    title: "What is prior authorization?",
    content: (
      <>
        Prior authorization is a review process used by health plans and insurance companies to determine whether a requested medical service, procedure, or medication is medically necessary and appropriate based on established clinical guidelines.
      </>
    )
  },
  {
    title: "How is medical necessity determined?",
    content: (
      <>
        Medical necessity is determined using evidence-based clinical guidelines and standards of care. These guidelines help ensure that treatments are safe, effective, and appropriate for a patient&apos;s condition.
      </>
    )
  },
  {
    title: "Which medical necessity guidelines do insurance companies use?",
    content: (
      <>
        Insurance plans may use one or more of the following guideline sources:
        <br /><br />
        <ul>
          <li><strong>Medicare guidelines</strong>, including:
            <ul>
              <li>National Coverage Determinations (NCDs)</li>
              <li>Local Coverage Determinations (LCDs)</li>
              <li>Medicare policies</li>
            </ul>
          </li>
          <li><strong>Internal health plan or insurance company policies</strong></li>
          <li><strong>Third-party clinical guidelines</strong>, commonly from:
            <ul>
              <li>MCG (Milliman Care Guidelines)</li>
              <li>Evolent</li>
              <li>Carelon</li>
              <li>EviCore</li>
              <li>InterQual</li>
              <li>National Comprehensive Cancer Network (NCCN)</li>
            </ul>
          </li>
        </ul>
      </>
    )
  },
  {
    title: "How do insurance plans decide which guideline to use?",
    content: (
      <>
        <h2>Insurance companies follow a guideline hierarchy that varies by plan type.</h2>
        
        <h3>Medicare and Medicare Advantage plans typically use:</h3>
        <ol>
          <li>Medicare National Coverage Determinations (NCDs)</li>
          <li>Medicare Local Coverage Determinations (LCDs), based on state</li>
          <li>Medicare policies, if applicable</li>
          <li>Internal health plan or insurance policies</li>
          <li>Third-party guidelines (MCG, eviCore, InterQual, Carelon, etc.)</li>
          <li>Professional society guidelines</li>
        </ol>
        <br />
        <h3>Commercial insurance plans typically use:</h3>
        <ol>
          <li>Internal health plan or insurance policies</li>
          <li>Third-party guidelines (MCG, eviCore, InterQual, Carelon, etc.)</li>
          <li>Professional society guidelines</li>
        </ol>
      </>
    )
  },
  {
    title: "How does out-of-network coverage affect prior authorization?",
    content: (
      <>
        Health plans have <strong>in-network providers</strong> that are contracted with the insurance company. Members are encouraged to receive care from these providers whenever possible.
        <br /><br />
        Out-of-network services are a common reason for <strong>prior authorization denials</strong>, especially for referrals. While many referrals are approved, denials often occur when the requested provider is not contracted or considered out-of-network.
      </>
    )
  },
  {
    title: "How can providers access prior authorization guidelines?",
    content: (
      <>
        Providers—including physicians, hospitals, clinics, and advanced practice providers (NPs and PAs)—can access prior authorization and medical necessity guidelines through individual insurance or health plan websites.
        <br /><br />
        <strong>Common challenge:</strong>
        Guidelines are often published as large PDF documents, making them difficult to search, interpret, and apply efficiently in clinical workflows.
      </>
    )
  }
]


export default function Faq() {
  return (
    <Container size="sm" className={classes.wrapper}>
      
      <Title ta="center" className={`${classes.title} text-white mb-5`}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated" className='mt-5'>
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
