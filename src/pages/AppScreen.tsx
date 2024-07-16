import { AppShell, Button, Flex, getGradient, Group } from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { Route, Routes } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";
import { RoutingPlus } from "../data/routes";
import classes from "./AppScreen.module.css";

function AppScreen() {
  return (
    <AppShell
      header={{ height: "5rem" }}
      footer={{ height: "4rem" }}
      styles={(_theme) => ({
        main: { backgroundColor: "transparent"},
      })}
      padding="md"
    >
      <AppShell.Header className={classes.header}>
        <Flex
          direction={"row"}
          justify={"center"}
          align={"center"}
          gap={"xl"}
          p={"sm"}
        >
          <Group grow justify="center">
            {Object.keys(RoutingPlus).map((key) => (
              <NavigateButton
                routePath={RoutingPlus[key].path}
                label={RoutingPlus[key].title}
                key={"nav_btn" + key}
              />
            ))}
          </Group>
        </Flex>
      </AppShell.Header>
      <AppShell.Main p={"8rem"}>
        <Routes>
          {Object.keys(RoutingPlus).map((key) => (
            <Route
              path={RoutingPlus[key].path}
              Component={RoutingPlus[key].comp}
              key={"route_obj_" + key}
            />
          ))}
        </Routes>

      </AppShell.Main>
      <AppShell.Footer className={classes.fotter}>
        <Flex
          direction={"row"}
          justify={"center"}
          align={"center"}
          gap={"xl"}
          p={"sm"}
        >
          <Button
            component="a"
            href={"https://www.linkedin.com/in/lior-buchmeier-932855218"}
            target="_blank"
            rightSection={<IconBrandLinkedin size={14} />}
          >
            LinkedIn
          </Button>
        </Flex>
      </AppShell.Footer>
    </AppShell>
  );
}

export default AppScreen;
