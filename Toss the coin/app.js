let quote = ["Head", "Tail"]

function generatequote() {
    let quotes = Math.floor(Math.random() * quote.length);
    document.getElementById("quotess").textContent = quote[quotes];;
}