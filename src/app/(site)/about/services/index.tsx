import { Text, SimpleGrid, Container, rem, Title, Button } from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';
import classes from './styles.module.css';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon?: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        {/* <Icon style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} /> */}
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="md">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    
    title: 'AI-Driven Review, Precision Coding and Hospital Status',
    description: "With 63% of errors being due to the hospital’s coding mistakes, and 44% due to inaccuracies in clinical documentation, our solution aims to eradicate this. With the use of our AI application, information from the provider's notes is reviewed to accurately predict the correct ICD-11 code and hospital status with supporting data diagnosis. In one simple step, the provider note is also summarized with important information and data for the coder to easily review.",
  },
  {
    
    title: 'Revenue Cycle Optimization',
    description:
      'With the US healthcare system losing up to $935 million every week, optimizing your revenue cycle performance with accurate and efficient medical coding is critical. Using our advanced algorithms, our application looks at every chart and note and identifies and rectifies coding mistakes, ensuring maximum revenue cycle.',
  },
  {
    
    title: 'Clinical Documentation Improvement',
    description:
      'Inaccuracies in clinical documentation account for a significant portion of coding errors. Our web application will give data to support coding, making it easier for your coders to use the data in the provider note.',
  },
  {
    
    title: 'ICD-11 Transition Support',
    description:
      'With the International Classification of Disease (ICD) 11 having 4x more codes than ICD-10, we ensure that transitioning from ICD-10 to ICD-11 is smooth. With the myriad of challenges transitioning offers, compliance and accuracy are paramount. Our specialized transitioning support system services guide you through the processes, minimizing disruptions and a smooth workflow.',
  },
];

export function Services() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <div className='xl:px-11 lg:mt-[120px] lg:mb-[60px]'>
    <Container mt={30} mb={30} size="xl" >
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Services
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={1}>
        {items}
      </SimpleGrid>
    </Container>
    <Container className='flex justify-center items-center'>
      <Button component='a' href='/contact' className='m-10' size='lg'>Contact us</Button>
    </Container>
    </div>
  );
}