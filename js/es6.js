/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
// var name = 'your_name_here';
// var email = '';
// var languages = [];

const name = 'lamar';
const email = 'lamarlofton55@gmail.com';
const languages = ['javascript', 'bash', 'css', 'html', 'bootstrap'];
console.log(name, email, languages);

// TODO: rewrite the object literal using object property shorthand
// users.push({
//     name: name,
//     email: email,
//     languages: languages
// });
// console.log(user[user.length-1]);

// const user = {
//     name:'lamar',
//     email: 'lamarlofton55@gmail.com',
//     languages: ['javascript', 'bash', 'css', 'html', 'bootstrap']
// };

// TODO: replace `var` with `let` in the following variable declarations
// var emails = [];
// var names = [];

let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach((user) => {
    return emails.push(user.email);
});

users.forEach(user => {
    return names.push(user.name);
});
console.log(emails);
console.log(names);

// const user =
// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach((user) => {

    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    // console.log(email);
    // const email = user.email;
    // const languages = user.languages;
    const {email, name, languages} = user;

    // TODO: rewrite the assignment below to use template strings
    developers.push(`${name.toUpperCase()}'s email is ${email} ${name} knows ${languages.join(', ')}`);
});


// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
    for(let developer of developers) {



        // TODO: rewrite the assignment below to use template strings
        list += `<li>${developer}</li>`;
    };
list += '</ul>';

// console.log(list, ${'<li>'} ${developer} ${'</li>'});
document.getElementById('list').innerHTML = list;