import { Button } from "@mantine/core"
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./general.module.css";

function NavigateButton({routePath,label,icon}:{routePath:string,label:string,icon?:string}){
    const navigate = useNavigate();
    const loc = useLocation();
    const applyNavigation = () => {
        navigate(routePath)
    }
    return(
        <Button className={classes.nav_btn} onClick={applyNavigation} miw="10rem" maw={"12rem"}>
            {label}
        </Button>
    )
}

export default NavigateButton