const portfolio = document.querySelector("#portfolio");

fetch("data/myData/myData.json")
    .then((response) => response.text())
    .then((text) => {
        const myData = JSON.parse(text);
        console.log(myData);

        const portfolioThing = myData.portfolio;
        for (const thing of portfolioThing) {
            const portfolioTitle = document.createElement("h3");
            portfolioTitle.textContent = `Project   Name: ${thing["Project Name"]}`;
            const portfolioDescription = document.createElement("p");
            portfolioDescription.textContent = `Description: ${thing["Description"]}`;
            portfolio.appendChild(portfolioTitle);
            portfolio.appendChild(portfolioDescription);
        }
    });