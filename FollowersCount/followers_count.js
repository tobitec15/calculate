let count = 0; // Initialize count to 0
function increaseCount() {
   count++; // Icrement the count by 1
   displayCount(); // Display the count 
   checkCountValue(); // check count value and display messages
}
function displayCount() {
    document.getElementById('countDisplay').innerHTML;
}
function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    }else if (count === 20) {
        alert("Your Instagram post gained 20 followers! keep it up!");
    }
}