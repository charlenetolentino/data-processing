const queryString = window.location.search;

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}

if (queryString.length > 0) {
    const urlParams = new URLSearchParams(queryString);

    let myData = "";
    let myCart = "";
    let myTotal = 0;
    myCart += "<h3>Cart Contents</h3>"

    // Log the values
    urlParams.forEach(function (value, key) {
        var cased = titleCase(value);

        if (key == "Cart") { //cart items
            // alert("Cart Item: " + value)
            switch (value) {
                case "Widget":
                    myCart += "Widget: $3.99 <br>"
                    myTotal += 3.99
                    break

                case "Sprocket":
                    myCart += "Sprocket: $5.99 <br>"
                    myTotal += 5.99
                    break

                case "Thingy":
                    myCart += "Thingy: $1.99 <br>"
                    myTotal += 1.99
                    break

            }
        } else {
            key = key.split("_").join(" ");
            console.log(key, value);
            myData += `<p>${key}: ${cased}</p > `;
            }

    });

    myCart += "Total: " + myTotal + "<br>"
    myData = myCart + myData;
    console.log(myCart,myTotal)
    myData += '<p><a href="index.html">CLEAR<a></p>';
    document.getElementById("output").innerHTML = myData;
}