import { atom } from "jotai";

const lightTheme = atom(true)
const products = atom([])
const page = atom(1)
const userInfo = atom({
    "Email": null,
    "IsAdmin": false,
    "_Id": null,
    "Avatar": "/img/users/noImage.jpg"
})
const settingsVisibility = atom(false)

const Atoms = {
    lightTheme,
    products,
    page,
    userInfo,
    settingsVisibility,
}

export default Atoms;