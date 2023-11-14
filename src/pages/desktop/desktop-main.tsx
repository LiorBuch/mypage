import {
    AppShell,
    Badge,
    Blockquote,
    Box, Button,
    Card,
    Flex,
    Group,
    Image,
    rem,
    ScrollArea,
    Tabs,
    Text,
    Title
} from '@mantine/core';
import {
    IconAlphabetLatin,
    IconAntenna, IconBrandLinkedin,
    IconBriefcaseFilled, IconHome,
    IconInfoCircle, IconMail,
    IconSchool,
    IconStarFilled
} from "@tabler/icons-react";
import {useState} from "react";
import {Carousel} from "@mantine/carousel";
import SKILLS_PYTHON from "../../skills.ts";
import SKILLS_CPP from "../../cppskill.ts";
import SKILLS_JAVA from "../../skilljava.ts";

function DesktopSite() {
    const iconStyle = {width: rem(12), height: rem(12)};
    const [tab, changeTab] = useState("about-me")
    return (
        <AppShell
            header={{height: 60}}
            padding="md"
        >
            <AppShell.Header>
                <Tabs defaultValue="about-me">
                    <Tabs.List>
                        <Tabs.Tab value="projects" leftSection={<IconHome style={iconStyle}/>}
                                  onClick={() => changeTab("home")}>
                            Home
                        </Tabs.Tab>
                        <Tabs.Tab value="about-me" leftSection={<IconAlphabetLatin style={iconStyle}/>}
                                  onClick={() => changeTab("about-me")}>
                            About Me
                        </Tabs.Tab>
                        <Tabs.Tab value="skills" leftSection={<IconStarFilled style={iconStyle}/>}
                                  onClick={() => changeTab("skills")}>
                            My Skills
                        </Tabs.Tab>
                        <Tabs.Tab value="projects" leftSection={<IconAntenna style={iconStyle}/>}
                                  onClick={() => changeTab("projects")} disabled={true}>
                            My Projects
                        </Tabs.Tab>
                    </Tabs.List>


                </Tabs>
            </AppShell.Header>
            <AppShell.Main>
                {tab === "about-me" && <AboutMeTab/>}
                {tab === "skills" && <SkillsTab/>}
                {tab === "projects" && <ProjectsTab/>}
                {tab === "home" && <HomeTab/>}
            </AppShell.Main>
            <AppShell.Footer>
                <Flex direction={"row"} justify={"center"} align={"center"} gap={"xl"} p={"sm"}>
                    <Button component="a" href={"https://www.linkedin.com/in/lior-buchmeier-932855218"} target="_blank"
                            rightSection={<IconBrandLinkedin size={14}/>}>LinkedIn</Button>
                    <Button component="a" rightSection={<IconMail size={14}/>}>Email</Button>
                </Flex>
            </AppShell.Footer>
        </AppShell>

    )
}

function AboutMeTab() {
    const platform = navigator.platform
    console.log("this is the issue",platform)
    return (
        <Flex>
            <ScrollArea h={window.innerHeight - 200}>
                <ScrollArea.Autosize>
                    <Card shadow="sm" padding="lg" m={"sm"} ml={"sm"} mr={"sm"} radius="md" withBorder w={platform==="Win32"? "50%" : "100%"}>

                        <Flex direction={"column"}>
                            <Blockquote color="blue" radius="xs" iconSize={40} icon={<IconInfoCircle/>} mt="xl" ml={"sm"}>
                                <Text size={"xl"} fw={700}>About Me</Text>
                                <Text size={"sm"}>24 Years old, studies computer science at the Tel Aviv University (second
                                    year).<br/>
                                    Finished military duty on Sep. 2021, as Technical Team Leader (IAF)
                                    Experienced in maintaining and integration of complex systems, working as part of a team
                                    as well as a team leader.<br/>
                                    High analytical and technological abilities. Complex problems solving ability. Highly
                                    motivated and looking to be integrate in a company as a software developer. </Text>
                            </Blockquote>
                            <Blockquote color="blue" radius="xs" iconSize={40} icon={<IconSchool/>} mt="xl" ml={"sm"}
                                        cite={"-Computer Science Student"}>
                                <Text size={"xl"} fw={700}>Academics</Text>
                                <Flex direction={"column-reverse"} gap={"md"}>
                                    <Box>
                                        <Text td={"underline"}>High school</Text>
                                        <Text c={"dimmed"}>2013-2017</Text>
                                        <Text size={"sm"}>Majoring Electronics and Computers</Text>
                                    </Box>
                                    <Box>
                                        <Text td={"underline"}>The Open University - Computer Science</Text>
                                        <Text c={"dimmed"}>2020-2022</Text>
                                        <Text size={"sm"}>Finished first year with grade of 87.</Text>
                                    </Box>
                                    <Box>
                                        <Text td={"underline"}>Tel Aviv University - Computer Science</Text>
                                        <Text c={"dimmed"}>2023-current</Text>
                                        <Text size={"sm"}>Studying right now!</Text>
                                    </Box>

                                </Flex>
                            </Blockquote>
                            <Blockquote color="blue" radius="xs" iconSize={40} icon={<IconBriefcaseFilled/>} mt="xl"
                                        ml={"sm"}>
                                <Text size={"xl"} fw={700}>Work History</Text>
                                <Flex direction={"column"} gap={"md"}>
                                    <Box>
                                        <Text td={"underline"}>QA and Software Student Position</Text>
                                        <Text fs="italic">@ScanMaster Systems</Text>
                                        <Text c={"dimmed"}>2022-2023</Text>
                                        <Text size={"sm"}>* started with QA on a spotweld ultrasonic system
                                            later created a fully automated app for testing and packaging logs from the
                                            customers, and using OpenCascade API for cad software.
                                            i was studying at the open university while working.
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text td={"underline"}>Air Defense System Technical Team Leader</Text>
                                        <Text fs="italic">@IDF Air Force</Text>
                                        <Text c={"dimmed"}> 2020-2021</Text>
                                        <Text size={"sm"}>* Supervising and guiding technicians and responsible for
                                            completion
                                            of assigned duties. <br/>
                                            * Aligned and perfected the maintenance protocol.
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text td={"underline"}>Air Defense System Technician</Text>
                                        <Text fs="italic">@IDF Air Force</Text>
                                        <Text c={"dimmed"}> 2017-2020</Text>
                                        <Text size={"sm"}>* 02 bootcamp training, technical support course for Arrow Missile
                                            System control room.<br/>
                                            * Service at the Air Defense School Trainers, responsible for fixing
                                            communication
                                            &hardware malfunctions , hardware upgrade, software upgrade including building
                                            the
                                            required scripts. Working on software malfunctions with industry engineers such
                                            as
                                            "Elbit","Elta", "Rafael","Tadiran" as well as working remotely with "Raytheon
                                            Technologies" at the USA.<br/>
                                            * Performed complex mechanical alignments and calibration of equipment to
                                            quality
                                            to
                                            the standards.<br/>
                                            * Qualified on all the air defense simulators and implemented the "Integrated
                                            Trainer"
                                            for collective training mode.
                                        </Text>
                                    </Box>
                                </Flex>
                            </Blockquote>
                        </Flex>
                    </Card>
                </ScrollArea.Autosize>
            </ScrollArea>
        </Flex>
    )
}

function SkillsTab() {
    const slidesPython = Object.keys(SKILLS_PYTHON).map((key) => (<Carousel.Slide p={"md"} key={key}>
        <Card shadow="sm" padding="lg" radius="md" withBorder w={260}>
            <Card.Section>
                <Image
                    src={SKILLS_PYTHON[key].img}
                    height={160}
                    alt={SKILLS_PYTHON[key].alt}
                    fit={"contain"}
                    width={160}
                />
                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{SKILLS_PYTHON[key].name}</Text>
                    <Badge color={SKILLS_PYTHON[key].badgeColor} variant="light">
                        {SKILLS_PYTHON[key].category}
                    </Badge>
                </Group>

                <Text size="sm" c="dimmed">
                    {SKILLS_PYTHON[key].description}
                </Text>
            </Card.Section>
        </Card>
    </Carousel.Slide>))
    const slidesCPP = Object.keys(SKILLS_CPP).map((key) => (<Carousel.Slide p={"md"} key={key}>
        <Card shadow="sm" padding="lg" radius="md" withBorder w={260}>
            <Card.Section>
                <Image
                    src={SKILLS_CPP[key].img}
                    height={160}
                    alt={SKILLS_CPP[key].alt}
                    fit={"contain"}
                    width={160}
                />
                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{SKILLS_CPP[key].name}</Text>
                    <Badge color={SKILLS_CPP[key].badgeColor} variant="light">
                        {SKILLS_CPP[key].category}
                    </Badge>
                </Group>

                <Text size="sm" c="dimmed">
                    {SKILLS_CPP[key].description}
                </Text>
            </Card.Section>
        </Card>
    </Carousel.Slide>))
    const slidesJava = Object.keys(SKILLS_JAVA).map((key) => (<Carousel.Slide p={"md"} key={key}>
        <Card shadow="sm" padding="lg" radius="md" withBorder w={260}>
            <Card.Section>
                <Image
                    src={SKILLS_JAVA[key].img}
                    height={160}
                    alt={SKILLS_JAVA[key].alt}
                    fit={"contain"}
                    width={160}
                />
                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{SKILLS_JAVA[key].name}</Text>
                    <Badge color={SKILLS_JAVA[key].badgeColor} variant="light">
                        {SKILLS_JAVA[key].category}
                    </Badge>
                </Group>

                <Text size="sm" c="dimmed">
                    {SKILLS_JAVA[key].description}
                </Text>
            </Card.Section>
        </Card>
    </Carousel.Slide>))
    return (<Card shadow="sm" padding="lg" radius="md" withBorder w={"70%"}>
            <Flex direction={"column"}>
                <Title> Python </Title>
                <Carousel
                    withIndicators
                    slideSize={{base: '100%', sm: '50%', md: '20%'}}
                    slideGap={{base: 0, sm: 'md'}}
                    loop
                    orientation={"horizontal"}
                    align="start">
                    {slidesPython}
                </Carousel>
                <Title> C++ and C </Title>
                <Carousel
                    withIndicators
                    slideSize={{base: '100%', sm: '50%', md: '20%'}}
                    slideGap={{base: 0, sm: 'md'}}
                    loop
                    orientation={"horizontal"}
                    align="start">
                    {slidesCPP}
                </Carousel>
                <Title> Java and Kotlin </Title>
                <Carousel
                    withIndicators
                    slideSize={{base: '100%', sm: '50%', md: '20%'}}
                    slideGap={{base: 0, sm: 'md'}}
                    loop
                    orientation={"horizontal"}
                    align="start">
                    {slidesJava}
                </Carousel>
            </Flex>
        </Card>
    )
}

function ProjectsTab() {
    return (<>
            Hello from Project Tab!
        </>
    )
}
function HomeTab() {
    return (<>
            Hello from Home Tab!
        </>
    )
}
export default DesktopSite