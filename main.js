import Router from './modules/router';
import AuthView from './views/auth/auth';
import LogoutView from './views/logout/logout';
import ChatView from './views/chat/chat';
import AboutView from './views/about/about';

let router = new Router();

window.addEventListener('DOMContentLoaded', () => {
    let authView = new AuthView(document.querySelector('.js-auth-view'));
    let logoutView = new LogoutView(document.querySelector('.js-header-view'));

    let chatView = new ChatView(document.querySelector('.js-chat-view'));
    let aboutView = new AboutView(document.querySelector('.js-about-view'));

    router.register('auth', authView);
    router.register('logout', logoutView);
    router.register('chat', chatView);
    router.register('about', aboutView);

    router.start();
});