import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconMessage2, IconBrandCtemplar, IconCreditCard, IconHomeShield, IconSatellite, IconSpyOff } from '@tabler/icons-react';
import classes from './featuresGrid.module.css';
import Contact from '@/components/Contact';

export const MOCKDATA = [
  {
    icon: IconSatellite,
    title: 'HITECH Act',
    description:
      'We comply with the Health Information Technology for Economic and Clinical Health (HITECH) Act, which addresses the security and privacy concerns associated with the electronic transmission of health information.',
  },
  {
    icon: IconCreditCard,
    title: 'PCI DSS',
    description:
      'We adhere to the Payment Card Industry Data Security Standard (PCI DSS) for organizations that handle payment card data, ensuring secure payment transactions.',
  },
  {
    icon: IconBrandCtemplar,
    title: 'Data Encryption',
    description:
      'All data stored and transmitted through NoteDoctorAI is encrypted using strong encryption algorithms to protect it from unauthorized access. Encryption ensures that your data remains confidential and secure, both in transit and at rest.',
  },
  {
    icon: IconSpyOff,
    title: 'User Privacy',
    description:
      'We respect your privacy and are committed to transparent data practices. We do not collect or store any information.',
  },
  {
    icon: IconHomeShield,
    title: 'Your Trust is Our Priority',
    description:
      'At NoteDoctorAI, we recognize that trust is earned, and we are committed to earning and maintaining your trust through our unwavering dedication to data security and compliance.',
  },
  {
    icon: IconMessage2,
    title: 'Get in Touch',
    description:
      "If you have any questions, concerns, or feedback regarding our security practices, please don't hesitate to reach out to us. Our security team is here to assist you and address any inquiries you may have.",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="lg" size="xl" mb={7} c="white">
        <strong>{title}</strong>
      </Text>
      <Text size="md" c="#FFF" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <div className="container">
    <Container size="lg">
      <Title className={classes.title} id='more'>Compliance with Industry Regulations</Title>

      <div className='mb-11'>
        <Text className={classes.description}>
        We comply with the Health Information Technology for Economic and Clinical Health (HITECH) Act, which addresses the security and privacy concerns associated with the electronic transmission of health information.
        </Text>
      </div>
    </Container>
    <Container size={"lg"} className={"mb-11"}>
      <SimpleGrid
    
        mt={60}
        cols={{ base: 1, sm: 2 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
        className='mb-11'
      >
        {features}
      </SimpleGrid>
      </Container>
      <Container size="lg">
      <Title className={classes.title} id='more'>Get in Touch</Title>

      <div className='mb-11'>
        <Text className={classes.description}>
        If you have any questions, concerns, or feedback regarding our security practices, please don&apos;t hesitate to reach out to us. Our security team is here to assist you and address any inquiries you may have.
        </Text>
      </div>
    </Container>
      <Contact showNewsLetterSignUp={false}/>
    </div>
  );
}