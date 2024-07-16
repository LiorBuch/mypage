import { Flex } from "@mantine/core";
import SKILLS_CPP from "../data/skills/cppskill";
import SKILLS_JAVA from "../data/skills/skilljava";
import SKILLS_PYTHON from "../data/skills/skillspy";
import SKILLS_JS from "../data/skills/skillsjs";
import SkillCarousel from "../components/SkillCarousel";

function SkillsPage() {
  return (
    <Flex direction={"column"} justify={"center"} gap={"md"} wrap={"wrap"}>
      <SkillCarousel skill={SKILLS_PYTHON} title={"Python"} />
      <SkillCarousel skill={SKILLS_CPP} title={"C,C++ and C#"} />
      <SkillCarousel skill={SKILLS_JAVA} title={"Java and Kotlin"} />
      <SkillCarousel skill={SKILLS_JS} title={"JS & TS"} />
    </Flex>
  );
}
export default SkillsPage;
