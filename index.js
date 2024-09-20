const Yes = document.getElementById("yes");
const No = document.getElementById("no");

let isSwapped = false;
function swapButtons() {
    const parent = Yes.parentNode;

    if (!isSwapped) {
        parent.insertBefore(No, Yes); 
    } else {
        parent.insertBefore(Yes, No); 
    }

    isSwapped = !isSwapped; 
}
No.addEventListener("click", swapButtons);

Yes.addEventListener("click", function(event) {
    window.location.href = "yes.html";
});

