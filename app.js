const btnCalculate = document.getElementById("btnCalculate");
let name1 = document.getElementById("name_input");
let note1 = document.getElementById("first_note");
let note2 = document.getElementById("second_note");
let color_Input = document.getElementById("color_input");
const text_Note3 = document.getElementById("text_Note3");
const validation_Text = document.getElementById("validation_Text");
const body = document.getElementById("body");
const validation_div=document.getElementById("validation_div")
const text_N3 = document.getElementById("text_Note3");

function calculate_note(event){
    event.preventDefault();
    let first_note = parseFloat(note1.value);
    let second_note = parseFloat(note2.value);
    let des_note1 = first_note * 0.3;
    let final_note1 = first_note - des_note1;
    let des_note2 = second_note * 0.3;
    let final_note2 = second_note - des_note2;
    let third_note = (final_note1 + final_note2) / 2;
    let des_note3 = third_note * 0.4;
    let final_note3 = third_note - des_note3;
    let final_note = (des_note1 + des_note2 + des_note3 ) ;
    console.log(final_note);
    body.style.background = color_Input.value;
    if(note1.value == 0 || note2.value == 0){
        validation_Text.textContent = "Los campos no pueden quedar vacios";
        setTimeout(function(){
            (validation_Text.textContent = "");
        },5000);
    }else if(first_note < 1 || second_note < 1){
        validation_Text.textContent = `La nota minima debe ser 1 y usted ha ingresado ` + first_note + "\n" + second_note;
        setTimeout(function(){
            (validation_Text.textContent = "");
        },5000);
    }else if(first_note > 5 || second_note > 5){
        validation_Text.textContent = `La nota maxima debe ser 5 y usted ha ingresado ` +  first_note + "\n" + second_note;
        setTimeout(function(){
            (validation_Text.textContent = "");
        },5000);
    }else if(final_note >= 4 & final_note < 5){
        validation_Text.style.color = "white";
        validation_Text.textContent = name1.value +` se encuentra en cuadro de honor, su nota es: ` + final_note.toFixed(2);
        validation_div.style.backgroundColor="blue";
        setTimeout(function(){
            (validation_Text.textContent = ""),
            (validation_div.style.backgroundColor = "");
        },5000);
    }else if(final_note > 3.4 & final_note < 4){
        validation_Text.style.color = "white";
        validation_Text.textContent = name1.value + ` gano, su nota es: ` + final_note.toFixed(2);
        validation_div.style.backgroundColor="green",padding="10px 10px";
        setTimeout(function(){
            (validation_Text.textContent = ""),
            (validation_div.style.backgroundColor = "");
        },5000);
    }else if(final_note > 2 & final_note <= 3.4){
        validation_Text.style.color = "black";
        validation_Text.textContent = name1.value+ ` puede recuperar, su nota es: ` + final_note.toFixed(2);
        setTimeout(function(){
            (validation_Text.textContent = "");
        },5000);
    }else if(final_note < 2){
        validation_Text.style.color = "white";
        console.log("entro");
        validation_Text.textContent = name1.value+ ` es un friki, su nota es: ` + final_note.toFixed(2);
        validation_div.style.backgroundColor="red";
        
        setTimeout(function(){
            (validation_Text.textContent = ""),
            (validation_div.style.backgroundColor = "");
        },5000);
    }
}

btnCalculate.addEventListener("click", calculate_note);