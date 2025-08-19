import { Feature } from "@/types/feature";
import {
  IconClipboardText,
  IconHeart,
  IconHourglassEmpty,
  IconLayersSubtract,
  IconRocket,
  IconTarget,
} from "@tabler/icons-react";

const featuresData: Array<Feature> = [
  {
    id: 1,
    icon: IconRocket,
    title: "A System Overloaded",
    paragraph:
      "In 2023, Medicare Advantage processed nearly 50 million prior authorization requests.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: IconHourglassEmpty,
    title: "Denials That Don’t Hold Up",
    paragraph:
      "More than 80% of denials from 2019–2023 were later overturned on appeal — showing denials often result from missing documentation, not medical necessity.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: IconHeart,
    title: "Patients Left Waiting",
    paragraph:
      "Physicians and patients still endure weeks of delays, excessive appeals, and denied treatments.",
    btn: "Learn More",
    btnLink: "/#",
  },
  // {
  //   id: 4,
  //   icon: IconTarget,
  //   title: "Accuracy",
  //   paragraph:
  //     "With its advanced algorithms, coding accuracy is improved and it offers suggestions for medical codes and enhanced data support for efficient diagnoses.",
  //   btn: "Learn More",
  //   btnLink: "/#",
  // },
  // {
  //   id: 5,
  //   icon: IconLayersSubtract,
  //   title: "Notes Summarization",
  //   paragraph:
  //     "Provider’s notes are summarized with all essential information needed for coders to review efficiently.",
  //   btn: "Learn More",
  //   btnLink: "/#",
  // },
  // {
  //   id: 6,
  //   icon: IconClipboardText,
  //   title: "Flexibility",
  //   paragraph:
  //     "Seamlessly export information in PDF or Word formats. Notes Summarization",
  //   btn: "Learn More",
  //   btnLink: "/#",
  // },
];

export default featuresData;
