// wait for DOM to finish loading so we can safely access 
// the document's <header> element
document.addEventListener("DOMContentLoaded", () => {
   
    // fetch the .json file with the book objects
    fetch("data/books.json")
        // when the response arrives, parse it as json data
        .then(response => response.json())
        
        // when we get the json data, display it
        .then(data => {

            let output = "";
            // for each object in the collection
            for (const book of data) {
                output += `${book.title} 
                    ${("author" in book) ? ` by ${book.author} `  : ""}
                    ${book.price}<br>`;      
            }
            // add output to div
            // NOTE: better to use querySelector()
            // and append nodes (next lesson)
            document.getElementById("demo").innerHTML = output;
            
        // for debugging
        }).catch(error => {
            console.log(error);
        });
});
