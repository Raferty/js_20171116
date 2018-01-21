export default class Data {

    constructor() {
        this.data = {};
    }

    getData() {

        let messageList = [
            {
                user: "Василий Пупкин",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                isOwner: false
            },
            {
                user: "Вы",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                isOwner: true
            },
            {
                user: "Василий Пупкин",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                isOwner: false
            },
            {
                user: "Василий Пупкин",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                isOwner: false
            },
            {
                user: "Вы",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                isOwner: true
            }
        ];

        this.data = messageList;

        return this.data;
    }

}