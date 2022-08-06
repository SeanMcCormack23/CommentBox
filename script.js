
let charCounter = document.getElementById("charCount");
let textArea = document.getElementById("textBox");
const maxChars = 140;

const charCalc = () => {
  let commentLength = textArea.value.length;
  let currCharsTyped = maxChars - commentLength;
  
  charCounter.textContent = currCharsTyped + "/140";
  


if (currCharsTyped < 0){
  charCounter.style.color = "red";
}else if (currCharsTyped < 20) {
  charCounter.style.color = "orange";
}else {
  charCounter.style.color = "black";
}
};
textArea.addEventListener("keyup", charCalc);

let returnedComment = document.getElementById("commentContents");
let submit = document.getElementById("submit");

function displayComment(){
  if (textArea.value != ""){
  returnedComment.innerHTML = textArea.value;
  }
  return false;
};
textArea.addEventListener('input', function handleChange(event) {
  returnedComment.textContent = (event.target.value);
});