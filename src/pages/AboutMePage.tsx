import {
  Flex,
  Card,
  Blockquote,
  Box,
  Text,
  Center,
} from "@mantine/core";
import {
  IconInfoCircle,
  IconSchool,
  IconBriefcaseFilled,
} from "@tabler/icons-react";

function AboutMePage() {
  return (
    <Center>
      <Card
        shadow="sm"
        padding="lg"
        m={"sm"}
        ml={"sm"}
        mr={"sm"}
        radius="md"
        withBorder
        styles={{
          root:{
            backgroundColor:"#8d9ecc54",
          }
        }}
      >
        <Flex direction={"column"}>
          <Blockquote
            color="blue"
            radius="xs"
            iconSize={40}
            icon={<IconInfoCircle />}
            mt="xl"
            ml={"sm"}
          >
            <Text size={"xl"} fw={700}>
              About Me
            </Text>
            <Text size={"sm"}>
              24 Years old, studies computer science at the Tel Aviv University
              (second year).
              <br />
              Finished military duty on Sep. 2021, as Technical Team Leader
              (IAF) Experienced in maintaining and integration of complex
              systems, working as part of a team as well as a team leader.
              <br />
              High analytical and technological abilities. Complex problems
              solving ability. Highly motivated and looking to be integrate in a
              company as a software developer.{" "}
            </Text>
          </Blockquote>
          <Blockquote
            color="blue"
            radius="xs"
            iconSize={40}
            icon={<IconSchool />}
            mt="xl"
            ml={"sm"}
            cite={"-Computer Science Student"}
          >
            <Text size={"xl"} fw={700}>
              Academics
            </Text>
            <Flex direction={"column-reverse"} gap={"md"}>
              <Box>
                <Text td={"underline"}>High school</Text>
                <Text c={"dimmed"}>2013-2017</Text>
                <Text size={"sm"}>Majoring Electronics and Computers</Text>
              </Box>
              <Box>
                <Text td={"underline"}>
                  The Open University - Computer Science
                </Text>
                <Text c={"dimmed"}>2020-2022</Text>
                <Text size={"sm"}>Finished first year with grade of 87.</Text>
              </Box>
              <Box>
                <Text td={"underline"}>
                  Tel Aviv University - Computer Science
                </Text>
                <Text c={"dimmed"}>2023-current</Text>
                <Text size={"sm"}>Studying right now!</Text>
              </Box>
            </Flex>
          </Blockquote>
          <Blockquote
            color="blue"
            radius="xs"
            iconSize={40}
            icon={<IconBriefcaseFilled />}
            mt="xl"
            ml={"sm"}
          >
            <Text size={"xl"} fw={700}>
              Work History
            </Text>
            <Flex direction={"column"} gap={"md"}>
              <Box>
                <Text td={"underline"}>QA and Software Student Position</Text>
                <Text fs="italic">@ScanMaster Systems</Text>
                <Text c={"dimmed"}>2022-now</Text>
                <Text size={"sm"}>
                  * started with QA on a spotweld ultrasonic system later
                  created a fully automated app for testing and packaging logs
                  from the customers, and using OpenCascade API for cad
                  software. i was studying at the open university while working.
                </Text>
              </Box>
              <Box>
                <Text td={"underline"}>
                  Air Defense System Technical Team Leader
                </Text>
                <Text fs="italic">@IDF Air Force</Text>
                <Text c={"dimmed"}> 2020-2021</Text>
                <Text size={"sm"}>
                  * Supervising and guiding technicians and responsible for
                  completion of assigned duties. <br />* Aligned and perfected
                  the maintenance protocol.
                </Text>
              </Box>
              <Box>
                <Text td={"underline"}>Air Defense System Technician</Text>
                <Text fs="italic">@IDF Air Force</Text>
                <Text c={"dimmed"}> 2017-2020</Text>
                <Text size={"sm"}>
                  * 02 bootcamp training, technical support course for Arrow
                  Missile System control room.
                  <br />
                  * Service at the Air Defense School Trainers, responsible for
                  fixing communication &hardware malfunctions , hardware
                  upgrade, software upgrade including building the required
                  scripts. Working on software malfunctions with industry
                  engineers such as "Elbit","Elta", "Rafael","Tadiran" as well
                  as working remotely with "Raytheon Technologies" at the USA.
                  <br />
                  * Performed complex mechanical alignments and calibration of
                  equipment to quality to the standards.
                  <br />* Qualified on all the air defense simulators and
                  implemented the "Integrated Trainer" for collective training
                  mode.
                </Text>
              </Box>
            </Flex>
          </Blockquote>
        </Flex>
      </Card>
    </Center>
  );
}
export default AboutMePage;
