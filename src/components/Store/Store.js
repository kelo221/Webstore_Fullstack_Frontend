import {proxy} from "valtio";

const Store = proxy({
    userInfo: {
        "Email": null,
        "IsAdmin": false,
        "_Id": null,
        "Avatar": "/img/users/noImage.jpg"
    },
    shoppingCart: {
        "TransactionId": 0,
        "UserId": 0,
        "Code": 0,
        "FirstName": "Johnny",
        "LastName": "Smitherino",
        "Email": null,
        "Name": null,
        "Address": "TestAddress",
        "City": null,
        "Country": "testCountry",
        "Zip": 123,
        "Complete": null,
        "OrderItem": [],
    },
    lightTheme: true,
    products:[],
    page: 1,
    settingsVisibility: false,
    checkOutVisibility: false,
    alertStatus: false,
    alertMessage: '',
    alertSeverity: '',
})

export default Store;