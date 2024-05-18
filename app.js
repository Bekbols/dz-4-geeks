
let MyInfo = {
    name: "BEKBOLSUN",
    surname: "tOLOGONOV",
}


function capitalizeString(name){
        if (MyInfo.name.length === 0) {
        return "";
    } else {
            return MyInfo.name.charAt(0).toUpperCase() + MyInfo.name.slice(1).toLowerCase() + " " +
                MyInfo.surname.charAt(0).toUpperCase() + MyInfo.surname.slice(1).toLowerCase()
        }
}

console.log(capitalizeString());


















