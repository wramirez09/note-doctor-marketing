export type FaqEntry = { q: string; aText: string };

export const faqs: FaqEntry[] = [
  {
    q: "What is prior authorization?",
    aText:
      "Prior authorization is a review process used by health plans and insurance companies to determine whether a requested medical service, procedure, or medication is medically necessary and appropriate based on established clinical guidelines.",
  },
  {
    q: "How is medical necessity determined?",
    aText:
      "Medical necessity is determined using evidence-based clinical guidelines and standards of care. These guidelines help ensure that treatments are safe, effective, and appropriate for a patient's condition.",
  },
  {
    q: "Which medical necessity guidelines do insurance companies use?",
    aText:
      "Insurance plans may use one or more of the following: Medicare guidelines (NCDs, LCDs, Medicare policies), internal health plan or insurance company policies, and third-party clinical guidelines from MCG, Evolent, Carelon, EviCore, InterQual, and NCCN.",
  },
  {
    q: "How do insurance plans decide which guideline to use?",
    aText:
      "Insurance companies follow a guideline hierarchy that varies by plan type. Medicare and Medicare Advantage plans typically use NCDs, then LCDs, Medicare policies, internal policies, third-party guidelines, and professional society guidelines. Commercial insurance plans typically use internal policies, third-party guidelines, and professional society guidelines.",
  },
  {
    q: "How does out-of-network coverage affect prior authorization?",
    aText:
      "Health plans contract with in-network providers and members are encouraged to use them. Out-of-network services are a common reason for prior authorization denials, especially for referrals to providers not contracted with the plan.",
  },
  {
    q: "How can providers access prior authorization guidelines?",
    aText:
      "Providers can access guidelines through individual insurance or health plan websites. A common challenge is that guidelines are often published as large PDF documents, making them difficult to search, interpret, and apply efficiently in clinical workflows.",
  },
];

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.aText,
      },
    })),
  };
}
