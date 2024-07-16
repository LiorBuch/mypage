import { Carousel } from "@mantine/carousel";
import { Skill } from "../data/skills/skillspy";
import { Card, Group, Badge, Image, Text, Title, Divider, Center } from "@mantine/core";
import { isMobile } from "react-device-detect";

function SkillCarousel({ skill,title }: { skill: { [key: string]: Skill } , title:string }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder maw={"70vw"}>
      <Title>{title}</Title>
      <Divider/>
      <Carousel
        slideSize={{ base: "100%", sm: "50%", md: "20%" }}
        slideGap={ isMobile ? "xs" : "xs"}
        loop
        orientation={"horizontal"}
        align="start"
        withControls={!isMobile}
        withIndicators={isMobile}
      >
        {Object.keys(skill).map((key) => (
          <Carousel.Slide p={"md"} key={key}>
            <Card shadow="sm" padding="lg" radius="md" withBorder w={260}>
              <Card.Section>
                <Image
                  src={skill[key].img}
                  height={160}
                  alt={skill[key].alt}
                  fit={"contain"}
                  width={160}
                />
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>{skill[key].name}</Text>
                  <Badge color={skill[key].badgeColor} variant="light">
                    {skill[key].category}
                  </Badge>
                </Group>

                <Text size="sm" c="dimmed">
                  {skill[key].description}
                </Text>
              </Card.Section>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Card>
  );
}
export default SkillCarousel;
