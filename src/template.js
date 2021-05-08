const fs = require('fs');

class Template {
    
    constructor(data) {
        this.employees = data;
    }

    generateWeb() {

        const empData = this.employees;
        const mgrData = JSON.parse(empData.manager);
        const engData = empData.engineers;
        const intData = empData.interns;

        const htmlTop = 
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

        let htmlData = () => {
            
            let membersHtmlCards = "";

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

            function htmlLoop(cardData) {

                const icon = (cardData.role == "Manager") ? "fas fa-briefcase" : (cardData.role == "Engineer") ? "fas fa-glasses" : "fas fa-graduation-cap";
                const lastItemText = (cardData.role == "Manager") ? "Office Number" : (cardData.role == "Engineer") ? "Github" : "School";

                let lastItemVal = (cardData.role == "Manager") ? cardData.officeNumber : (cardData.role == "Engineer") ? cardData.github : cardData.school;

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

            htmlCards(mgrData);
            htmlCards(engData);
            htmlCards(intData);

            return membersHtmlCards;
        };

        const htmlBottom =
        `
                </main>
            </div>
        </body>
        </html>`;

        let fullHtml = htmlTop + htmlData() + htmlBottom;

        fs.writeFile('./dist/index.html', fullHtml, (err) => {
            if (err) {
                throw err;
            };
            console.log('Page created successfully!');
        });
    }
}

module.exports = Template;