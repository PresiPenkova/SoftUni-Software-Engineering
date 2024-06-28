function project(input) {
    const neededHoursForProject = 3;

    const name = input[0];
    const hoursForProject = Number(input[1]);

    const totalHours = neededHoursForProject * hoursForProject;

    console.log(`The architect ${name} will need ${totalHours} hours to complete ${hoursForProject} project/s.`);
}

