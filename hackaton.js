// backgroud color of body

document.body.style.backgroundColor = "lightgreen"

//creating DIV Element

var div = document.createElement("div")
document.body.append(div)

//Creating H1 Tag

var h1 = document.createElement("h1");
h1.innerText = "GitHubAPI"
h1.style.color = "grey"
h1.style.textAlign = "center"
h1.style.backgroundColor = "lightblue"
div.append(h1)


//creating heading

var h3 = document.createElement("h3");
h3.innerText = "Search and get the Details Hurrah!!!!!!!"
h3.style.color = "white"
h3.style.textAlign = "center"
h3.style.backgroundColor = "gold"
div.append(h3)

//Create line

var line = document.createElement("hr")
line.style.color="black"
div.append(line)

//creating  another Div inside DIv

var div1 = document.createElement("div")
document.body.append(div1)


var form = document.createElement("form")
form.style.borderRadius = "10px 10px 10px 10px"
form.style.border = "10px solid white"
form.setAttribute("placeholder", "Enter API")

