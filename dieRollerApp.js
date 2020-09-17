let die = document.getElementById("die");
let die_number_div = document.createElement("SPAN");
let dialogue_box_text = document.querySelector(".dialogue-box h1");
let button = document.querySelector("button");

let rollDie = () => {

    let dieRoll = Math.floor(Math.random() * 12) + 1;
    die.innerHTML = dieRoll;

    switch(dieRoll) {
        case 2: 
            let die_1 = document.createElement("IMG");
            let die_2 = document.createElement("IMG");
            die_1.src = "graphics/1.png";
            die_2.src = "graphics/1.png";
            die.appendChild(die_1);
            die.appendChild(die_2);
            dialogue_box_text.textContent = "You rolled a " + dieRoll + ".";
            break;
        case 3: 
            let die_3 = document.createElement("IMG");
            let die_4 = document.createElement("IMG");
            die_3.src = "graphics/1.png";
            die_4.src = "graphics/2.png";
            die.appendChild(die_3);
            die.appendChild(die_4);
            dialogue_box_text.textContent = "You rolled a " + dieRoll + ".";
            break;
        case 4:
            let die_5 = document.createElement("IMG");
            let die_6 = document.createElement("IMG");
            die_5.src = "graphics/2.png";
            die_6.src = "graphics/2.png";
            die.appendChild(die_5);
            die.appendChild(die_6);
            dialogue_box_text.textContent = "You rolled a " + dieRoll + ".";
            break;
        case 5:
            let die_7 = document.createElement("IMG");
            let die_8 = document.createElement("IMG");
            die_7.src = "graphics/2.png";
            die_8.src = "graphics/3.png";
            die.appendChild(die_8);
            die.appendChild(die_7);
            dialogue_box_text.textContent = "You rolled a " + dieRoll + ".";
            break;
        case 6: 
            let die_9 = document.createElement("IMG");
            let die_10 = document.createElement("IMG");
            die_9.src = "graphics/3.png";
            die_10.src = "graphics/3.png";
            die.appendChild(die_9);
            die.appendChild(die_10);
            dialogue_box_text.textContent = "You rolled a " + dieRoll + ".";
            break;
        case 7: 
            let die_11 = document.createElement("IMG");
            let die_12 = document.createElement("IMG");
            die_11.src = "graphics/3.png";
            die_12.src = "graphics/4.png";
            die.appendChild(die_12);
            die.appendChild(die_11);
            dialogue_box_text.textContent = "You rolled a " + dieRoll + ".";
            break;
         case 8: 
            let die_13 = document.createElement("IMG");
            let die_14 = document.createElement("IMG");
            die_13.src = "graphics/4.png";
            die_14.src = "graphics/4.png";
            die.appendChild(die_13);
            die.appendChild(die_14);
            dialogue_box_text.textContent = "You rolled a " + dieRoll + ".";
            break;
        case 9: 
            let die_15 = document.createElement("IMG");
            let die_16 = document.createElement("IMG");
            die_15.src = "graphics/5.png";
            die_16.src = "graphics/4.png";
            die.appendChild(die_15);
            die.appendChild(die_16);
            dialogue_box_text.textContent = "You rolled a " + dieRoll + ".";
            break;
        case 10: 
            let die_17 = document.createElement("IMG");
            let die_18 = document.createElement("IMG");
            die_17.src = "graphics/5.png";
            die_18.src = "graphics/5.png";
            die.appendChild(die_17);
            die.appendChild(die_18);
            dialogue_box_text.textContent = "You rolled a " + dieRoll + ".";
            break;
        case 11: 
            let die_19 = document.createElement("IMG");
            let die_20 = document.createElement("IMG");
            die_19.src = "graphics/6.png";
            die_20.src = "graphics/5.png";
            die.appendChild(die_19);
            die.appendChild(die_20);
            dialogue_box_text.textContent = "You rolled a " + dieRoll + ".";
            break;
        case 12: 
            let die_21 = document.createElement("IMG");
            let die_22 = document.createElement("IMG");
            die_21.src = "graphics/6.png";
            die_22.src = "graphics/6.png";
            die.appendChild(die_21);
            die.appendChild(die_22);
            dialogue_box_text.textContent = "You rolled a " + dieRoll + ".";
            break;
        default:
            die.innerHTML = " ";
            let button_parent = button.parentNode;
            button_parent.removeChild(button);
            dialogue_box_text.textContent = "You landed on a trap and died.";
            break;
    }
}
button.addEventListener("click", rollDie, false);
