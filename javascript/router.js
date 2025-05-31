import views from './views.js';

class Router {
    constructor() {
        this.routes = {
            '/': 'home',
            '/about': 'about',
            '/contact': 'contact'
        };
        
        this.init();
    }
    
    init() {
        window.addEventListener('popstate', () => {
            this.loadRoute(window.location.pathname);
        });
        
        document.querySelectorAll('.header-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const path = `/${e.target.id.replace('-link', '')}`;
                history.pushState({}, '', path);
                this.loadRoute(path);
            });
        });
        
        this.loadRoute(window.location.pathname);
    }
    
    loadRoute(path) {
        const route = this.routes[path] || 'home';
        document.getElementById('app').innerHTML = views[route];
    }
}

export default Router;