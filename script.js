
const albert = new XMLHttpRequest();
albert.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        document.getElementById("name").innerHTML = myObj.name;
        document.getElementById("bday").innerHTML = myObj.birthday;
        document.getElementById("button").addEventListener("click",
            function () {
                document.getElementById("fullBio").innerHTML = myObj.bio;

            });

    }
};

albert.open("GET", "einstein.json", true);
albert.send();
