const accountId = 144553
let accountEmail = "kaynatmozammil@gmail.com"
var accountPassword = "12345"
accounCity = "Delhi"

let accountState 

// accountId = 2  // not allowed

accountEmail = "kaynat@gmail.com"
accountPassword = "5678"
accounCity = "Jamia"


console.log(accountId);

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/


console.table([
    accountId,accountEmail,accountPassword,accounCity,accountState
])