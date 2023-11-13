export type Skill = {
    name: string,
    category: string,
    description: string,
    img: string,
    badgeColor: string
    alt: string
};

const SKILLS_PYTHON: { [key: string]: Skill } = {
    django: {
        name: "Django Framework",
        category: "Web",
        description: "Django Framework for backend servers and authentication provider for websites.",
        img: "https://static.djangoproject.com/img/logos/django-logo-negative.1d528e2cb5fb.png",
        badgeColor: "pink",
        alt: "django"
    },
    kivy:{
        name: "Kivy and KivyMD",
        category: "App",
        description: "Kivy, Cross Platform for application development.",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Kivy_logo.png",
        badgeColor: "green",
        alt: "kivy"
    },
    numpy:{
        name: "Numpy",
        category: "Math",
        description: "Math Lib",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/1200px-NumPy_logo_2020.svg.png",
        badgeColor: "yellow",
        alt: "numpy"
    },
    scipy:{
        name: "Scipy",
        category: "Math",
        description: "Math Lib",
        img: "https://raw.githubusercontent.com/scipy/scipy/main/doc/source/_static/logo.svg",
        badgeColor: "yellow",
        alt: "scipy"
    },
    pandas:{
        name: "Pandas",
        category: "Data",
        description: "Data Lib",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",
        badgeColor: "blue",
        alt: "pandas"
    },
    tensorflow:{
        name: "Tensor Flow",
        category: "AI",
        description: "AI and ML Lib",
        img: "https://www.tensorflow.org/static/images/tf_logo_social.png",
        badgeColor: "red",
        alt: "tensor"
    },
    scikit:{
        name: "SciKitLearn",
        category: "AI",
        description: "Base Library for AI and Machine Learning",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png",
        badgeColor: "red",
        alt: "scikit"
    },
    multi:{
        name: "MultiProcessing",
        category: "Core",
        description: "MultiProcessing and MultiThreading for fast compute and task distribution",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
        badgeColor: "green",
        alt: "multi"
    },
    cython:{
        name: "Cython",
        category: "Core",
        description: "the implementation of C in python and API between the both",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Cython_logo.svg/1200px-Cython_logo.svg.png",
        badgeColor: "green",
        alt: "cython"
    },
    opencv:{
        name: "OpenCV",
        category: "AI",
        description: "The usage of Computer Vision for AI and ML",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/OpenCV_Logo_with_text_svg_version.svg/800px-OpenCV_Logo_with_text_svg_version.svg.png",
        badgeColor: "red",
        alt: "opencv"
    },
}



export default SKILLS_PYTHON