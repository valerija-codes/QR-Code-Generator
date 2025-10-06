import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {
        message: "Type in a URL: ",
        name: "URL"
    }
]).then((answers) => {
    const url = answers.URL;

    const qr_svg = qr.image(url, {type: "png"});
    qr_svg.pipe(fs.createWriteStream("qr_code.png"));

    fs.writeFile("URL.txt", url, (err) => {
        if(err) throw err;
        console.log("The file has been saved!");
    });
    console.log("QR code generated successfully");
}).catch((error) => {
    console.error(error);
});