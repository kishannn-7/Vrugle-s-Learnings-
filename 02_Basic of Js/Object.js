// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b",5: "c"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2};
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
    Desc : {
        CourseLenth: "20 hours",
        CourseType: "Live",
        RecordingProvided: true,
        CourseContent: {
            html: false,
            css: false,
            js: true,
        } 
    }
}

course.courseInstructor = "hitesh choudhary"
course.launch = "april"
console.log(`At First Course: ${course}`); // Output : "At First Course: [object Object]"

console.log(`At First Course: ${JSON.stringify(course)}`); // printing the object value,

// const newCourse = Object.assign(course); // worst syntax
const newCourseBestCopy = Object.assign({},course); // Best syntax

// newCourse.assistant = "Kishan";
// newCourse.price = "200";
// newCourse.launch = "May";
// newCourse.modeOfLaunch = "online";

newCourseBestCopy.assistant = "Anonymous";
newCourseBestCopy.price = "Free";
newCourseBestCopy.launch = this.launch;
newCourseBestCopy.modeOfLaunch = "online";

newCourseBestCopy.Desc.CourseLenth = "5 hours";
newCourseBestCopy.Desc.CourseContent.react = true;


// console.log(newCourse);
console.log("newCourseBestCopy =",newCourseBestCopy);

console.log("original course =", course);   

// ***** The nested properties can be changed by the newCourseBestCopy object,
//  because the nested Properties is not copied, it is referenced. 
// So, if you change the nested Properties in the newCourseBestCopy object, it will also change in the original course object. 


// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

