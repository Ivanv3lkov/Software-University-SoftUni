function projectCreation(input) {
    let nameArchitect = input.shift(); 
    let totalProjects = Number(input.shift());
    let timeForOneProject = 3;
    let hoursNeeded = totalProjects * timeForOneProject;
    
    console.log(`The architect ${nameArchitect} will need ${hoursNeeded} hours to complete ${totalProjects} project/s.`);
   
}

projectCreation( ['George', '4'] );