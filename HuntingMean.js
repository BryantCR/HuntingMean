
function prueba(event){

    event.preventDefault();

    let user = $('#user').val();
    $.get(`https://api.github.com/users/${user}`, displayName)
    console.log('Working correctly')
    function displayName(data) {
        console.log(data.login);
        document.querySelector('.allData').innerHTML =`
        <h1>User: ${data.login}</h1>
        <h2>Name: ${data.name}</h2>
        <img style="width: 200px;" src = "${data.avatar_url}">
        `;
        
    }

}

$( '.search' ).on( 'submit', prueba )

