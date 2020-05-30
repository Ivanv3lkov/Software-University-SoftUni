function printPersonInfo(firstName, lastName, age) {
    let personInfo = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    for (let key in personInfo) {
        console.log(`${key}: ${personInfo[key]}`);
    }
}

printPersonInfo("Peter", "Pan", "20");