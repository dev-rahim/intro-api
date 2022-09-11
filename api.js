function LoadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function LoadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => DisplayUsers(data));
}

function LoadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
}

function DisplayUsers(data) {
    const ul = document.getElementById('userName');
    for (const users of data) {
        const li = document.createElement('li');
        li.innerText = `name = ${users.name}  Email= ${users.email}`;
        ul.appendChild(li);
        // console.log(users.name);
    }
    // console.log(data);
}