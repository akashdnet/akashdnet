interface data {
    name: string;
    nameFull: string;
    name1: string;
    name2: string;
    socialLinks: {
        name: string;
        href: string;
        className: string;
        target: string;
        rel: string;
    }[];
    navLinks: {
        name: string;
        href: string;
    }[];
}



export const data = {
    name: "Akash",
    nameFull: "MD Imtiaz Khondoker Akash",
    name1: "MD Imtiaz",
    name2: "Khondoker Akash",
    // name: "Salman",
    location: "Rangpur, Bangladesh",
    email: "akashdmq@gmail.com",
    phone: "+8801317012700",
    socialLinks: [
        { name: "github", href: "https://github.com/akashdnet", className: "fab fa-github", target: "_blank", rel: "noopener noreferrer" },
        { name: "linkedin", href: "https://linkedin.com/in/akashdnet", className: "fab fa-linkedin-in", target: "_blank", rel: "noopener noreferrer" },
        { name: "twitter", href: "https://twitter.com/akashdnet", className: "fab fa-twitter", target: "_blank", rel: "noopener noreferrer" },
        { name: "facebook", href: "https://facebook.com/akashdnetbd", className: "fab fa-facebook-f", target: "_blank", rel: "noopener noreferrer" },
    ],
    navLinks: [
        { name: "home", href: "#home" },
        { name: "about", href: "#about" },
        { name: "skills", href: "#skills" },
        // { name: "education", href: "#education" },
        { name: "experience", href: "#experience" },
        { name: "projects", href: "#projects" },
        { name: "contact", href: "#contact" },
    ]

}