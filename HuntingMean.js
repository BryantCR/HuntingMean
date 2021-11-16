let button = $('#action');
let user = $('#user').val();
let usern = document.getElementById('user').value;
console.log(user, "Esto es USER");
//console.log(usern, "Esto es USERN");
// https://api.github.com/users/${User}

$.get(`https://api.github.com/users/${user}`, displayName)
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
function displayName(data) {
    console.log(data);
}







