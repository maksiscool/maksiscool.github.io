


function NuhUh(message){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/1134472047272140820/-dhjxCWPAIUbVWx-keVAJi-vQtLm7Pn4QnxHahMpzNSfPJpUW3EkS0IDNdlmUetVvaNk", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': message,
    })); 
}