const favoriteList = document.querySelector("#favoriteList");

fetch("data/myData/myData.json")
    .then((response) => response.text())
    .then((text) => {
        const myData = JSON.parse(text);
        console.log(myData);

        const favoriteThings = myData.favorites;
        for (const thing of favoriteThings) {
            const listItem = document.createElement("li");
            listItem.textContent = `Favorite ${thing["Favorite type"]}: ${thing["Favorite thing"]}`;
            favoriteList.appendChild(listItem);
        }
    });