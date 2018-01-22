export default class Data {

    constructor() {
        this.data = [];
    }
    
    setData(user, message) {

        let existStorage = this.getData();
        
        existStorage.push({
            user: user,
            message: message
        });
        
        localStorage.setItem('messages', JSON.stringify({
            data: existStorage
        }));
    }

    getData() {

        let data = localStorage.getItem('messages');

        if (!data) {
            return this.data;
        }

        try {
            data = JSON.parse(data);
            console.log(data);
        } catch(err) {
            console.error('invalid data');
            return false;
        }

        return data.data;
    }

}