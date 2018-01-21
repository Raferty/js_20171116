import Block from '../block';
import Textarea from '../textarea/textarea';
import Button from '../button/button';

import Data from '../../models/data';
import User from '../../models/user';

import template from './message-create.pug';
import './message-create.scss';

export default class CreateMsg extends Block {
    
    constructor(node, options = {}) {
        super(node, options);
        this.data = new Data();
    }
    
    render() {
        this.node.innerHTML = template();
        
        this.button = new Button(this.node.querySelector('.js-submit'), {
            text: 'Отправить',
            cssClass: 'button_msg'
        });
        
        this.textarea = new Textarea(this.node.querySelector('.js-textarea'), {
            placeholder: 'Введите сообщение',
            rows: 5
        });
        
        this.textarea.render();
        this.button.render();
        
        this.button.onClick = () => { this.send() };
    }
    
    send() {
        
        let user = User.load();
        let message = this.textarea.getValue();
        
        this.data.setData(user.name, message);
        
        this.textarea.clear();
    }
    
}