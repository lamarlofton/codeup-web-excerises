'use sctrict';

// const wait = num => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, num);
//     });
// }
            // OR

// function wait(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, num);
//     });
// }


// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// const token = 4e5d0405ccc5db9351a2bbec318c33421f373315



function getLastCommitFrom(username) {
    let token = '4e5d0405ccc5db9351a2bbec318c33421f373315'
    let url = `https://api.github.com/users/${username}/events/public`

    return fetch(url, {
        headers: {
            'Authorization': `${token}`
        }
    })
        .then(response => response.json()
            .then(data => {
                return `${username}'s last commit was made on
             ${data[0].created_at.substring(0, 10)}`
            })
        )
        .catch(() => console.error('BAD REQUEST'));
}
getLastCommitFrom('LamarLofton').then( lastCommit => console.log(lastCommit));


// list events preformed by user
// GET /users/:username/events
// list public events

// const getLastEvent = (username) => {
//     const token = '42cfa067c38e50c2cbb95116be719cc20a1f32cd';
//     const url = `https://api.github.com/users/${username}/events/public`
//     return fetch(url, {headers: {'Authorization': `token ${token}`}});
// }
//
// getLastEvent("danielfryar").then((data) => {
//     console.log(data);
// })