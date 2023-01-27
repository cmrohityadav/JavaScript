//yt
const uid="abc123"
//  uid="abcd123" //not allow 

var fullName="Rohit";
var email="rohit@cvdata.co.in";
var pwd="12345";
var conPwd="12345";
var courseCount="0";
var isLoggedFromGoogle=false;
var village="malad";
var city="mumbai";
var state="Maharashtra";

console.log("my name is "+fullName); // 1st method
console.log("my name is ",fullName);  //2nd method

//3rd method
console.log(`
    User id is: ${uid};
    user full name is : ${fullName};
    and email is : ${email};
    password: ${pwd};
    course count is : ${courseCount};
    login state: ${isLoggedFromGoogle};
    village=${village};
    city:${city};
    state : ${state};

`)

