import Block from '../block';
import template from './message.pug';
import './message.scss';

import Data from '../../models/data';

export default class Message extends Block {
    
    constructor(node, options = {}) {
        super(node, options);
        
    }
    
    render() {
        this.data = new Data();
        let data = this.data.getData();

        this.node.innerHTML = template({
            messages: data
        });

    }
    
}