type Employe={
  name:string;
  startDate:Date;
}

type Manager={
    name:string,
    department:string,
}

type TeamLead=Employe & Manager;

const teamLead:TeamLead={
    name:"ritik",
    startDate:new Date(),
    department:"frontEnd Enginner",
}

console.log(teamLead);