// Hardcoded wishlist items with corresponding product links
const wishlistItems = [
    { name: "iPhone 12 128gb", link: "https://www.amazon.com/gp/product/B08PNXVB6B/ref=ox_sc_saved_image_2?smid=A1DPUBNMVLM1OL&psc=1" },
    { name: "Case for iPhone 12", link: "https://www.amazon.com/gp/product/B07QQZF6LJ/ref=ox_sc_saved_image_1?smid=A1RI0YHZ8J2HZU&psc=1" },
    { name: "HP Windows Laptop", link: "https://www.amazon.com/HP-Micro-edge-Microsoft-14-dq0040nr-Snowflake/dp/B0947BJ67M/ref=sr_1_4?crid=20M2JXTFKK0I8&dib=eyJ2IjoiMSJ9.8ycXYmS8xSQGn0jxIUfiR--k0__0ALWwezBoPyugPX89e4r9yBn7W-hQQFZfTBcQ0x85J9Hx1ElW3YanoBFKcVoJHnTXh7SCbTmgFeSTQ7GTH41Q-LNlNYRrkTWmSM7jmqB7tgauZmFY3LKs5hhmUA5JYj7FOcJB418kwp3zGqcHv9pk1yq4sA3_FYqcZUZpYmzUKVPN4YJkbvoyjivZuoXYrLLi7dmHSmJR3FBjtu4.xSg5Sz-mWKJB8GOTp3t3ZJUfKksyBhDM8_3MNgb8uqM&dib_tag=se&keywords=hp+laptop&qid=1727749714&sprefix=hp+laptop%2Caps%2C189&sr=8-4" },
    { name: "25 dollar Visa Card", link: "https://www.amazon.com/Visa-Gift-Card-plus-Purchase/dp/B07HJHK8Y5/ref=sr_1_5?crid=AAU4VSAJC0S7&dib=eyJ2IjoiMSJ9.gdMcdB8x0Nfbggt_L5164FRIkgIqOEsa_hw_OENhiA7TYPNpsg8exSrIrl-L3M-m3m-hz3YPIyAmx4Zy6WNrOEwDy_tc5lt_VlsaMfY1Eg8VXitjsybNm7CGJNKpd5X_zltKqYSlmqFLb4WGPvG7remaUgCWQGwSD5R-k0pgCGiaCFgdLiheAuWbcLvoJlqvlze5YilbMTJ9KI-cNOQtEm2n2PviiHVrTtDlru6x2ZV4afe44PApqdDzuYorpSdEmV9yvT75oUhEn6WAV_WW-TamC8wW9j3LFVwZm8SujXY.fJduAb4oo-GvgL2vkhLzgJ11zhsZ4aL_Y1Rg2pnMLME&dib_tag=se&keywords=25+dollar+gift+card&qid=1727749858&sprefix=25+dola%2Caps%2C203&sr=8-5" },
    { name: "Xbox Controller", link: "https://www.amazon.com/GameSir-Controller-Xbox-Windows-Joysticks-X/dp/B0C7GW9F88/ref=sr_1_6?crid=37XLV7XGQV4K7&dib=eyJ2IjoiMSJ9.esGG7pafXCEk_c9mSITHVcBlrZYuOm3xS4oFy_YYwoH-5PlKcYGDvbeR3WpspY-qraIvTsxuWrszFZL5ZUcQP1tPF2EErau8KdpQ5W7TGWF24q_3NfAjJq5jxp-U6q2ykTqWA2FWLIPEamTyMwc-xCLC9tFac2ezeR6dUoWy7hXB6UHMXiIG43wtHjwK01f0Cs9tpl1TfOAj4R65XN9IZKR-8C5UyGzjbb7eppJjs_8.czGM6A42ZH3hjuobZhjYS2bhbo7BC8hECn5MkoL6cIM&dib_tag=se&keywords=xbox+controller&qid=1727749901&sprefix=xbox+controll%2Caps%2C144&sr=8-6" },
];

// Function to render the wishlist items with clickable buttons
function renderWishlist() {
    const wishlist = document.getElementById("wishlist");

    wishlistItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item.name;

        // Create a button with a link to the product page
        const linkButton = document.createElement("a");
        linkButton.href = item.link;  // Set the link
        linkButton.textContent = "View";
        linkButton.className = "product-button";  // Add a class for styling

        listItem.appendChild(linkButton);
        wishlist.appendChild(listItem);
    });
}

// Call the function to render the wishlist when the page loads
window.onload = renderWishlist;
