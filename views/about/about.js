import View from '../view';
import template from './about.pug';

import User from '../../models/user';

export default class About extends View {

    constructor(node) {
        super(node);

        let text = 'Online chat may refer to any kind of communication over the Internet that offers a real-time transmission of text messages from sender to receiver. Chat messages are generally short in order to enable other participants to respond quickly. Thereby, a feeling similar to a spoken conversation is created, which distinguishes chatting from other text-based online communication forms such as Internet forums and email. Online chat may address point-to-point communications as well as multicast communications from one sender to many receivers and voice and video chat, or may be a feature of a web conferencing service.'

        this.node.innerHTML = template({
            text: text
        });

        let model = User.load();

        if (!model) {
            location.href = './#auth';
        }
    }

}