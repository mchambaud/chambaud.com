const ghPages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/mchambaud/mchambaud.github.io.git";

ghPages.publish(
    pathname,
    {
        branch: "main",
        repo: repoURL,
    },
    (err) => {
        if (err) {
            console.error("Failed to publish: ", err);
        }
        else {
            console.info("Published");
        }
    }
);