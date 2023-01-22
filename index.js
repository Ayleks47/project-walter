console.log("LOADED!");

// let kokot = false;
// let btn = document.getElementById("tlacitko");

// let div = document.getElementById("sem");

// let new_p1 = document.createElement("p");
// let node_p1 = document.createTextNode("Based on the meme of the same name, Walter is a simple-minded dog with a deep appreciation for fire trucks and monster trucks, and has also been suspected of committing various war crimes in the second world war.");
// new_p1.appendChild(node_p1);

// let new_image = document.createElement("img");
// new_image.src = "img/walter main.jpeg";

// let new_p2 = document.createElement("p");
// let node_p2 = document.createTextNode("Look how he's happy even though, he commited many war crimes!");
// new_p2.appendChild(node_p2);
// new_p2.className = "happy";

// function show(){
//     if(kokot == true){
//         div.removeChild(new_p1);
//         div.removeChild(new_image);
//         div.removeChild(new_p2);
//         kokot = false;
//         return;
//     }
    
//     div.appendChild(new_p1);
//     div.appendChild(new_image);
//     div.appendChild(new_p2);
    

//     kokot = true;
// }

// btn.addEventListener("click", function(e){
//     show();
// })

// reveal function
function reveal() {
    var x = document.getElementById("description")
    if (x.style.display === "none") {
        x.style.display = "block"
    }
    else {
        x.style.display = "none"
    }
}
// button click
if (document.getElementById("tlacitko").clicked == True) {
    reveal()
}