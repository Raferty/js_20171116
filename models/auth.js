const KEY = "5a678a527d7ef24c5cf08ee6";
const URL = "https://testdb-41d5.restdb.io/rest/messages";

//const KEY = "59c92ddf04067cfd77ad9ac4";
//const URL = "https://js20170727quiz-9acd.restdb.io/rest/messages";

export default class Authorization {

    constructor() {
        
    }
    
    fetch() {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', URL);

        xhr.addEventListener('readystatechange', () => {

            if (xhr.readyState === 4) {

                try {
                    let data = JSON.parse(xhr.responseText); 
                    
                } catch (err) {
                    console.error(err);
                }
            }
            
        });

        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-apikey", KEY);
        xhr.setRequestHeader("cache-control", "no-cache");

        xhr.send();
        
        
    }
    
    create(author, text) {
        
        var data = JSON.stringify({
            "author": author,
            "text": text
        });
        
        let xhr = new XMLHttpRequest();
        
        xhr.open('POST', URL);
        
        xhr.addEventListener('readystatechange', () => {
            
            if (xhr.readyState === 4) {
                
                try {
                    console.log('sent');
                } catch (err) {
                    console.error(err);
                }
                
            }
        });
        
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-apikey", KEY);
        xhr.setRequestHeader("cache-control", "no-cache");

        xhr.send(data);
    }

}