function solve(input) {
    let companyInfo = {};
    
    input.forEach((line) => {
        let [company, employeeId] = line.split(' -> ');
        
        if (!companyInfo.hasOwnProperty(company)) {
            companyInfo[company] = [];
            companyInfo[company].push(employeeId);
        } else {
            if (!companyInfo[company].includes(employeeId)) {
                companyInfo[company].push(employeeId);
            }
        }
    });

    let sortedInfo = Object.entries(companyInfo).sort(sortCompanyNames);

    for (let [company, employeeIds] of sortedInfo) {
        console.log(company);
        
        for (let id of employeeIds)
        console.log(`-- ${id}`);
    }
    
    function sortCompanyNames(firstCompany, secondCompany) {
        let firstName = firstCompany[0];
        let secondName = secondCompany[0];

        return firstName.localeCompare(secondName);
    }
}

solve(
    [
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ]
);