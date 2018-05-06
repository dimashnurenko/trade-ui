function login() {
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    var loginDto = {};
    loginDto.phone = phone;
    loginDto.password = password;

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var token  = JSON.parse(request.responseText).token;

            localStorage.setItem('token', token);

            window.location.href = '/products'
        }
    };
    request.open('POST', 'http://localhost:8080/api/v1/auth/token');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(loginDto));
}