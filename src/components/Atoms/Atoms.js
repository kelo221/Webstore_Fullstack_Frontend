import { atom } from "jotai";

const lightTheme = atom(true)
const products = atom([])
const page = atom(1)
const settingsVisibility = atom(false)

const userInfo = atom({
    "Email": null,
    "IsAdmin": false,
    "_Id": null,
    "Avatar": "/img/users/noImage.jpg"
})

const shoppingCart = atom({
    "TransactionId": null,
    "UserId": null,
    "Code": null,
    "FirstName": null,
    "LastName": null,
    "Email": null,
    "Name": null,
    "Address": null,
    "City": null,
    "Country": null,
    "Zip": null,
    "Complete": null,
    "OrderItem": [],
})

const Atoms = {
    lightTheme,
    products,
    page,
    userInfo,
    settingsVisibility,
    shoppingCart,
}

export default Atoms;