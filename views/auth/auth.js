import View from '../view';
import template from './auth.pug';
import styles from './auth.scss';

import Button from '../../blocks/button/button';
import Input from '../../blocks/input/input';

import User from '../../models/user';
import Authorization from '../../models/auth';

export default class Auth extends View {

    constructor(node) {
        super(node);
        this.node.innerHTML = template();

        let model = User.load();

        if (model) {
            location.href = './#chat';
        }        

        this.button = new Button(this.node.querySelector('.js-submit'), {
            text: 'Войти',
            cssClass: 'button_auth'
        });

        this.input = new Input(this.node.querySelector('.js-name'), {
            value: '',
            placeholder: 'Введите имя'
        });
        
        this.inputEmail = new Input(this.node.querySelector('.js-email'), {
            value: '',
            placeholder: 'example@domain.com'
        });

        this.input.render();
        this.inputEmail.render();
        this.button.render();
        
        
        this.button.onClick = () => { this.validate(); };
    }

    login() {
        let name = this.input.getValue();

        if (!name.length) {
            alert('Не валидное имя');
            return;
        }

        let model = new User(name);
        model.save();

        location.href = './#chat';
    }
    
    validate() {
        
        this.user = 'test';
        this.message = 'we';
        
        this.userList = new Authorization();        
        this.userList.create('alex', 'text text');
        
    }
}