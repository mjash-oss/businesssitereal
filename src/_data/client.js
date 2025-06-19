module.exports = {
    name: "Code Stitch Web Designs",
    email: "ashleymartinmaya@gmail.com",
    phoneForTel: "314-203-0159",
    phoneFormatted: "(314) 203-0159",
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
