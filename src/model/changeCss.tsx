import {Theme} from "../context/ThemeContext";

export function changeCss(theme:Theme) {
    const root = document.querySelector(':root') as HTMLElement

    const components = ['components-background',
        `text-color`,
        'body-background',
        'input-background'];
    components.forEach((component)=>{
        root.style.setProperty(
            `--${component}-default`,
            `var(--${component}-${theme})`)
    })
}