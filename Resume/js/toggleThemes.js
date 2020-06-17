const themes = document.querySelector(".themes");
const page = document.querySelector(".page");
const avatar = document.querySelector(".avatar");

const themeConfig = {
    style: {
        names: [
            "main-background-color",
            "main-color",
            "page-background-color",
            "page-shadow",
            "interactive-color",
            "color-divider-fat",
            "color-contacts-items",
            "timeline-separator-border",
            "timeline-separator-border-color"
        ],
        values: {
            dark: [
                "#444",
                "#f3f3f3",
                "#333",
                "0 10px 100px 0 #f3f3f3",
                "aqua",
                "0.3571428571428571em solid rgba(222, 222, 222, 1)",
                "#f3f3f3",
                "1px solid #777",
                "rgb(200, 200, 200)"
            ]
            // other theme ...
        }
    }
};

function ChangeTheme(e) {

    const theme = e.target.value;

    avatar.setAttribute("src", `./assets/images/avatar_${theme}.png`);  // laugh is life :)

    // set theme style

    page.style.borderColor = (theme === "dark" ? "aqua" : "midnightblue");

    if (theme === "light") {

        themeConfig.style.names.forEach((name, index) => {
            document.documentElement.style.setProperty(`--${name}`, "");
        });

    } else {

        const styleValues = themeConfig.style.values[theme];

        themeConfig.style.names.forEach((name, index) => {
            document.documentElement.style.setProperty(`--${name}`, styleValues[index]);
        });

    }

}

themes.addEventListener("change", ChangeTheme);
