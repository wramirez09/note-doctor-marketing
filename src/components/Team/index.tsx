import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Mitesh Patel M.D.",
    designation: "Founder / President",
    description:
      "With over a decade immersed in hospital environments, I've witnessed firsthand the adverse effects of inaccurate coding and hospital status on revenue streams and the vital task of patient care. Recognizing the toll it exacts on providers and Clinical Documentation Improvement (CDI) teams, I embarked on a mission to develop a solution.",
    image: "/images/about/profile-holder.png",
    facebookLink: "/#",
    twitterLink: "/#",
    linkedInLink: "www.linkedin.com/in/miteshkumar-patel-5846b5213",
  },
  {
    id: 2,
    name: "Pinal Patel",
    designation: "Technical Advisor",
    description:
      "At NoteDoctorAI, Pinal leads our technical initiatives, drawing from over a decade of experience in Technical Consulting with renowned organizations like HPE, IBM and esteemed NSA”s CAE-CD designated military institution UNG. Armed with a BS in Computer Science, he steers our company towards innovative solutions and technically excellence.",
    image: "/images/about/profile-holder.png",
    facebookLink: "/#",
    twitterLink: "/#",
    linkedInLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex justify-center max-sm:flex-col">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
