import DesktopSite from "./pages/desktop/desktop-main.tsx";
import { MantineProvider} from "@mantine/core";
import {Notifications} from "@mantine/notifications";
import {THEME} from "./theme.tsx";
import '@mantine/carousel/styles.css';
import BackgroundParticle from "./background-particle.tsx";


function App() {

    return (
        <MantineProvider theme={THEME}>
            <Notifications/>
            <BackgroundParticle/>
            <DesktopSite/>
        </MantineProvider>
    )
}

export default App
