function attachEvents() {
    let sendBtn = document.getElementById("submit");
    let refreshBtn = document.getElementById("refresh");
    let authorElement = document.getElementById("author");
    let contentElement = document.getElementById("content");
    let chatHistory = document.getElementById("messages");

    refreshBtn.addEventListener("click", function(){
        fetch("https://rest-messanger.firebaseio.com/messanger.json")
        .then(res=>res.json())
        .then(data=>{
            Object.entries(data)
            .forEach(([key,msgData])=>{
                let {author, content} = msgData;
                let textToAdd = `${author}: ${content}\n`;
                chatHistory.value += textToAdd;
            });
        })
        .catch(err=>{
            console.log(err);
        });
    });

    sendBtn.addEventListener("click",function(){
        let author = authorElement.value;
        let content = contentElement.value;

        if(author && content) {
            let headers = {
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({author, content})
            };
    
            fetch("https://rest-messanger.firebaseio.com/messanger.json",headers)
            .then(()=>{
                authorElement.value = "";
                contentElement.value = "";
            });
        }
    });
}
