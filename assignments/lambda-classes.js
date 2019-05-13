// CODE here for your Lambda Classes
// name, age, location
class Person{
    constructor({name, age, location}){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
        //return `Hello my name is ${this.name}, I am from ${this.location}`        
    }
}

class Instructor extends Person {
    constructor({specialty, favLanguage, catchPhrase, ...rest}){
        super(rest);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(subject, student){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(att){
        super(att);
        this.previousBackground = att.previousBackground;
        this.className = att.className;
        this.favSubjects = att.favSubjects;
    }
    listsSubjects(){
        console.log(`favorite subjects: ${this.favSubjects}`);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Person {
    constructor(att){
        super(att);
        this.gradClassName = att.gradClassName;
        this.favInstructor = att.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const ins1 = new Instructor({
    'name' : 'bob', 
    'age' : 48, 
    'location' : 'minnesota',
    'specialty' : 'computer',
    'favLanguage' : 'Python',
    'catchPhrase' : 'yee haw'
});

const ins2 = new Instructor({
    name : 'emily', 
    age : 29, 
    location : 'washington dc',
    specialty : 'magic',
    favLanguage : 'Java',
    catchPhrase : 'yeet'
});

const stud1 = new Student({
    'name' : 'zachary', 
    'age' : 5, 
    'location' : 'NYC',
    'previousBackground' : 'pre school',
    'className' : 'WEB19',
    'favSubjects' : ['sandwich', 'naptime', 'algorithms' ],
});

const stud2 = new Student({
    name : 'jamila', 
    age : 20, 
    location : 'oregon',
    previousBackground : 'chef',
    className : 'WEB20',
    favSubjects : ['javascript', 'css', 'poetry'],
});

const pm1 = new ProjectManager({
    name : 'darius', 
    age : 30, 
    location : 'underground bunker',
    gradClassName : 'WEB2',
    favInstructor : 'bob'
});

const pm2 = new ProjectManager({
    name : 'arturo', 
    age : 25, 
    location : 'texas',
    gradClassName : 'WEB5',
    favInstructor : 'emily'
});

console.log(ins1.name);
console.log(ins2.name);
ins1.demo('computer');
ins2.grade('baking', stud1);

console.log(stud2.className);
stud1.listsSubjects();
stud2.PRAssignment('javascript');
stud1.sprintChallenge('react');

console.log(pm1.gradClassName);
console.log(pm2.favInstructor);
pm1.standUp('web14_why');
pm2.debugsCode(stud2, 'JS');
