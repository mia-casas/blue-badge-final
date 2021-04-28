let APIURL = '';

switch(window.location.hostname){
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:5005';
        break;
    case 'git.heroku.com/lista-shopping-list-main.git':
        APIURL = 'https://git.heroku.com/lista-shopping-list-main.git'
}

export default APIURL;