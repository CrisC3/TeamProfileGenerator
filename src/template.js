const fs = require('fs');

class Template {
    
    constructor(data) {
        this.employees = data;
        this.webLocalPath = "./dist/index.html"
    }

    // Method to create the index.html code
    generateWeb() {

        // Local variables which takes this.employees data
        const empData = this.employees;
        const mgrData = JSON.parse(empData.manager);
        const engData = empData.engineers;
        const intData = empData.interns;

        // Sets the HTML code header section
        const htmlHeader = 
        `<!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <title>My Team</title>
        </head>
        <body>
            <header class="bg-danger">
                <h1 class="text-white text-center py-5">My Team</h1>
            </header>
            <div class="container">
                <main class="d-flex justify-content-center flex-wrap">`;

        // Runs a loop to get all the added team members
        // as a anonymous function
        let htmlData = () => {
            
            // Local variable to store the full generated HTML card code
            let membersHtmlCards = "";

            // Function to determine if to run for manager
            // or engineers/interns data set
            function htmlCards(cardData) {

                if (cardData.role == "Manager") {
                    htmlLoop(cardData);
                }
                else {
                    cardData.forEach(element => {
                        htmlLoop(element);
                    });
                }
            }

            // Function to actual generate the card HTML code
            function htmlLoop(cardData) {

                // Local variables
                const iconSize = "fa-2x";
                const icon = (cardData.role == "Manager") ? `fas fa-briefcase ${iconSize}` : (cardData.role == "Engineer") ? `fas fa-glasses ${iconSize}` : `fas fa-graduation-cap ${iconSize}`;
                const lastItemText = (cardData.role == "Manager") ? "Office Number" : (cardData.role == "Engineer") ? "Github" : "School";
                let lastItemVal = (cardData.role == "Manager") ? cardData.officeNumber : (cardData.role == "Engineer") ? `<a href="https://github.com/${cardData.github}">${cardData.github}</a>` : cardData.school;

                // Adds the generate code into variable
                membersHtmlCards += `<div class="card m-3">
                    <div class="card-header bg-primary">
                        <h2 class="text-white">${cardData.name}</h2>
                        <div class="d-flex align-center">
                            <div class="my-auto mr-1 flex-shrink-1">
                                <i class=" text-white ${icon}"></i>
                            </div>
                            <h3 class="text-white">${cardData.role}</h3>
                        </div>
                    </div>
                    <div class="bg-secondary">
                        <ul class="list-group list-group-flush border m-2">
                            <li class="list-group-item">ID: ${cardData.id}</li>
                            <li class="list-group-item"><span>Email: <a href="mailto:${cardData.email}">${cardData.email}</a></li>
                            <li class="list-group-item">${lastItemText}: ${lastItemVal}</li>
                        </ul>
                    </div>
                </div>`;

            }

            // Calls to the function,
            // with the specific dataset
            htmlCards(mgrData);
            htmlCards(engData);
            htmlCards(intData);

            // Returns the variable with the HTML code
            return membersHtmlCards;
        };
        
        // HTML footer code
        const htmlFooter =
        `
                </main>
            </div>
        </body>
        </html>`;

        // Concatenates the htmlHeader, htmlData, and htmlFooter into one variable
        let fullHtml = htmlHeader + htmlData() + htmlFooter;

        // Creates the index.html into the dist location
        fs.writeFile(this.webLocalPath, fullHtml, (err) => {
            if (err) {
                throw err;
            };
            console.log('Page created successfully!');
        });
    }
}

module.exports = Template;