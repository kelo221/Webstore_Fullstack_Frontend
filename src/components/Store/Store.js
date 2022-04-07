import {proxy} from "valtio";

const Store = proxy({
    userInfo: {
        "Email": null,
        "IsAdmin": false,
        "_Id": null,
        "Avatar": "/img/users/noImage.jpg"
    },
    shoppingCart: {
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
    },
    lightTheme: true,
    products:[],
    page: 1,
    settingsVisibility: false,
    alertStatus: false,
    alertMessage: '',
    alertSeverity: '',
})

export default Store;