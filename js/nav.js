let navelements = ["welcome" , "tours", "services", "contact" ]

let navpages = ["index.html", "tours.html", "services.html", "contact.html"]

let navtext = "<ul>";

for(i=0; i<navelements.length; i++){
    navtext += '<li><a href="' + navpages[i] + '">' + navelements[i] + '</a></li>';
}

navtext += "</ul>"
console.log(navtext);
 
document.getElementById("nav").innerHTML = navtext