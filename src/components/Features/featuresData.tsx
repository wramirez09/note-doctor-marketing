import { Feature } from '@/types/feature';
import { IconClipboardText, IconHeart, IconHourglassEmpty, IconLayersSubtract, IconRocket, IconTarget } from '@tabler/icons-react';

const featuresData: Array<Feature> = [
  {
    id: 1,
    icon: IconRocket,
    title: "Efficiency",
    paragraph:
      "Upload files for web applications seamlessly with our drag-and-drop system.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: IconHourglassEmpty,
    title: "Timely",
    paragraph:
      "Processing of notes takes seconds, effectively reducing wait times",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: IconHeart,
    title: "User-Friendly Interface",
    paragraph:
      "Simplicity equals maximum ease of use. User-friendly and intuitive interface.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: IconTarget,
    title: "Accuracy",
    paragraph:
      "With its advanced algorithms, coding accuracy is improved and it offers suggestions for medical codes and enhanced data support for efficient diagnoses.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 5,
    icon: IconLayersSubtract,
    title: "Notes Summarization",
    paragraph:
      "Provider’s notes are summarized with all essential information needed for coders to review efficiently.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 6,
    icon: IconClipboardText,
    title: "Flexibility",
    paragraph:
      "Seamlessly export information in PDF or Word formats. Notes Summarization",
    btn: "Learn More",
    btnLink: "/#",
  },
];

export default featuresData;
