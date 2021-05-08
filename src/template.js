const fs = require('fs');

class Template {
    
    constructor(data) {
        this.employees = data;
    }

    generateIndex() {

        const empData = this.employees;
        const mgrData = JSON.parse(empData.manager);

        const htmlTop =`
        <!DOCTYPE html>
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
                <main class="d-flex">`;

        console.log(empData);
        console.log(mgrData);

        const htmlBottom = `
                </main>
            </div>
        </body>
        </html>`;

        let fullHtml = htmlTop + htmlBottom;

        fs.writeFile('./dist/index.html', fullHtml, (err) => {
            if (err) {
                throw err;
            };
            console.log('Page created successfully!');
        });
    }
}

module.exports = Template;