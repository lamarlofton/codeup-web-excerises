const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];
// let languages = lang;
// const result = users.filter(function(lang) {
//     return lang.value === 3;
// });
let result = users.filter(user => user.languages.length >= 3 );
console.log(result);

let contact = users.map(user => user.email);
console.log(contact);

let change = users.reduce((arr, obj) => {
    arr[obj.id] = obj;
    return arr;
}, {});
console.log(change);