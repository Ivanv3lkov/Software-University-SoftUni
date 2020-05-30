function solve(input) {
    let destination = input.shift();
  
    while (destination !== "End") {  
        let neededMoney = Number(input.shift());
        let savedMoney = 0;
        while (savedMoney < neededMoney) {
            currentlySavedMoney = Number(input.shift());
            savedMoney += currentlySavedMoney;

        }
        console.log(`Going to ${destination}!`);
        destination = input.shift();
    }
}
solve(['Greece','1000','200','200','300','100','150', '240','Spain','1200','300','500','193','423','End']);