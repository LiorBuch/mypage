import {Skill} from "./skills.ts";

const SKILLS_JS: { [key: string]: Skill } = {
    android: {
        name: "Android Studio",
        category: "App",
        description: "Django Framework for backend servers and authentication provider for websites.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/1200px-Android_Studio_icon_%282023%29.svg.png",
        badgeColor: "green",
        alt: "andro"
    },
    gamejava:{
        name: "Java Game Dev",
        category: "Game Dev",
        description: "Math Lib",
        img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
        badgeColor: "teal",
        alt: "jde"
    },
    okhttp:{
        name: "Open Cascade API",
        category: "Web",
        description: "Math Lib",
        img: "data:image/png;base64,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",
        badgeColor: "pink",
        alt: "okhttp"
    },
}



export default SKILLS_JS