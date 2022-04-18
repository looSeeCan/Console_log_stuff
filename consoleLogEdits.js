"use strict";

console.log("%cYouTube Video: Hiden console.log Features!", "font-size: 25px");
(() => {
    console.log("%cLucycan Ly", "font-weight: bold")//percent c
    console.warn("Lucycan Ly");//warn
    console.error("Lucycan Ly");//error
    
    console.log("%ctable", "font-weight: bold");

    class Person {
        constructor(firstName, lastName, age, gender) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.gender = gender;
        };
    };
    // get fullName() {
    //     return `${this.firstName} ${this.lastName}`
    // };

    let lucycan = new Person("Lucycan", "Ly", 43, "male");
    let sheng = new Person("Sheng", "Yang", 32, "female");
    let mailo = new Person("Mailo", "Ly", 58, "female");
    let familyArr = [lucycan, sheng, mailo];//put the objects in an array
    console.table(familyArr);

    console.log("%cgroup", "font-size: 25px");

    console.groupCollapsed("familyArr for loop");//declare here
    for (let i = 0; i < familyArr.length; i++) {
        console.log(familyArr[i]);
        
    };
    console.groupEnd("%cfamilyArr for loop", "font-weght: bold");//declare here .... anything between groupCollapsed and groupEnd will be grouped together

    console.log('%ctime', "font-size: 20px");
    //TODO:
})();


(() => {

})();