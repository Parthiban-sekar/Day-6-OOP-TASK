//Q3 Write a “person” class to hold all the details.

class Person{
    
    constructor(name,qualification,DOB,profession,AdharNo,PanNo){

        this.name = name;
        this.qualification = qualification;
        this.DOB = DOB;
        this.profession = profession;
    
    }
}
let details = new Person("Parthiban","Bsc computer science","24.07.2000","Developer");

console.log(`Basic information about the person:
Name is ${details.name},
His qualifaction is ${details.qualification}
DOB:${details.DOB},
His profession is ${details.profession}`)