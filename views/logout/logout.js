import View from '../view';
import template from './logout.pug';

import Button from '../../blocks/button/button';
import User from '../../models/user';

export default class Logout extends View {

    constructor(node) {
        super(node); 

        this.node.innerHTML = template();        

        this.button = new Button(this.node.querySelector('.js-logout'), {
            text: 'Выйти',
            cssClass: 'button_logout'
        });

        this.button.render();
        
        this.button.onClick = () => { this.logout() };       
    }
    
    logout() {
        let model = User.load();

        if(model) {
            model.delete();
            location.href = './#auth';
        }
    }

}