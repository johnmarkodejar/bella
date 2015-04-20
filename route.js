Router.configure({
    layoutTemplate: 'appLayout',
    loadingTemplate: 'loading'
});

Router.map(function() {
	this.route('product', {
		path: '/product'
	});
});
Router.route('/menu', {
name: 'menu'
});
Router.route('/orders', {
name: 'orders'
});
Router.route('/settings', {
name: 'settings'
});

Router.route('/creditcard', {
name: 'creditcard'
});
Router.route('/account', {
name: 'account'
});
Router.route('/favourites', {
name: 'favourites'
});
Router.route('/', {
name: 'login',
layoutTemplate: 'loginLayout'
});
Router.route('/register', {
name: 'register',
layoutTemplate: 'loginLayout'
});

	
