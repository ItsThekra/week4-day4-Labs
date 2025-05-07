let person = [{
    name : "Thekra",
    age : 23 ,
    gender: "female",
    image : "https://images.pexels.com/photos/13117509/pexels-photo-13117509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
},
{
    name : "Sarah",
    age : 25 ,
    gender: "female",
    image : "https://images.pexels.com/photos/30795200/pexels-photo-30795200/free-photo-of-red-barn-in-snowy-swedish-countryside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
},

{
    name : "Ahmed",
    gender: "male",
    age : 23 ,
    image : "https://images.pexels.com/photos/31920056/pexels-photo-31920056/free-photo-of-street-view-of-vatican-city-s-st-peter-s-basilica.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
}]
// 01: 
// فرزت الصور
let images = person.filter(person => person.image);
// سويت الاب اللي اضيف عليه
let body = document.body;
images.forEach(person => {
    // سوي الابن 
    let img = document.createElement("img");
    img.src = person.image;
    // اضفت الابن على الاب
    body.appendChild(img);
});

// 02: 
let females = people.filter(person => person.gender === "female");
let males = people.filter(person => person.gender === "male");




