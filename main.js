// Q1:
let names = document.getElementsByClassName("name");
let fullName = names[0];
fullName.style.color = "white";
fullName.style.backgroundColor = "black";

// Q2: 
let paragraph = document.getElementById("paragraph")
paragraph.style.fontWeight = "bold";
paragraph.classList.add("par");

// Q3:
let image = document.getElementsByTagName("img");
image[0].src = "https://images.pexels.com/photos/31829947/pexels-photo-31829947/free-photo-of-close-up-of-monstera-leaves-with-dew-drops.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// 04: // use appendChild and createElement

let list = document.querySelector("#list"); 

for (let i = 1; i <= 3; i++) 
{
    let listItem = document.createElement("li"); 
    listItem.textContent = `Item ${i}`;
    listItem.style.color = "red";
    listItem.style.border = "2px solid red";
    list.appendChild(listItem); 
}


// 05: 
let table = document.createElement("tab");
table.classList.add("styled-table");

// createTHead and insertRow functions
let header = table.createTHead();
let row = header.insertRow();

for (let i = 0; i < 3; i++) {
    let cell = row.insertCell();
    cell.textContent = `heaader ${i + 1}`;
}

document.getElementById("tab").appendChild(table);
