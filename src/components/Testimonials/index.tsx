import { Testimonial } from "@/types/testimonial";
import SingleTestimonial from "./SingleTestimonial";
import { motion } from "framer-motion";
import { Container, Title, Text } from "@mantine/core";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sabo Masties",
    designation: "Founder @ Rolex",
    content:
      " We don’t actually know what piece of information the insurer is looking for.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Margin Gesmu",
    designation: "Founder @ UI Hunter",
    content:
      "It’s a huge diversion of time and resources.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "William Smith",
    designation: "Founder @ Trorex",
    content:
      "Prior Auth is a guessing game",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
        <Container size="lg" >
          <div className="container px-4">
            <Title>
              What Physicians Are Saying
            </Title>
            <Text>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
              center</Text>

            <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
              {testimonialData.map((testimonial, i) => (
                <SingleTestimonial key={i} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </motion.div>
  );
};

export default Testimonials;
