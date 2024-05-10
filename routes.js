const fs = require("fs");

const reqHandler = (req, res) => {
    if (req.url === "/") {
        res.write("<html>");
        res.write("<head>");
        res.write("<title>");
        res.write("Good morning bro ");
        res.write("</title>");
        res.write("</head>");
        res.write("<body>");
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit"> Submit');
        res.write('</button>');
        res.write('</form>');
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }

    if (req.url === "/message" && req.method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const msg = parsedBody.split("=")[1];
            fs.writeFile("message.txt", msg, (err) => {
                // res.statusCode = 302;
                // res.setHeader("Location", "/");
                return res.end();
            });
        });

    }
    res.write("<html>");
    res.write("<head>");
    res.write("<title>");
    res.write("Welcome bros.....");
    res.write("</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("Welcome to my pageee guyzz !!");
    res.write("</body>");
    res.write("</html>");
    res.end();
}

module.exports= reqHandler;