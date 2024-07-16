import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { DESKTOP_THEME, MOBILE_THEME } from "./theme.tsx";
import "@mantine/carousel/styles.css";
import BackgroundParticle from "./background-particle.tsx";
import AppScreen from "./pages/AppScreen.tsx";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <MantineProvider theme={isMobile ? MOBILE_THEME : DESKTOP_THEME}>
      <Notifications />
      <AppScreen />
      <BackgroundParticle />
    </MantineProvider>
  );
}

export default App;
