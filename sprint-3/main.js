const Shop = require("./domain/shop.js");

function main() {
    let shop = new Shop();
    shop.order(3);
}

main();