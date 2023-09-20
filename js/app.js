// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/vista/',
    	url: 'vista.html',
    	name: 'vista',
  		},
		{
		path: '/cards/',
    	url: 'cards.html',
    	name: 'cards',
  		},
		{
		path: '/swiper/',
    	url: 'swiper.html',
    	name: 'swiper',
  		},
		{
		path: '/checkout/',
    	url: 'checkout.html',
    	name: 'checkout',
  		},
		{
		path: '/menu/',
		url: 'menu.html',
		name: 'menu',
		},
		{
		path: '/chocochip/',
		url: 'chocochip.html',
		name: 'chocochip',
		},
		{
		path: '/orderone/',
		url: 'orderone.html',
		name: 'orderone',
		},
		{
		path: '/delivery/',
		url: 'delivery.html',
		name: 'delivery',
		},
		{
		path: '/aboutus/',
		url: 'aboutus.html',
		name: 'aboutus',
		},
		{
		path: '/wallet/',
		url: 'wallet.html',
		name: 'wallet',
		},
		{
		path: '/store/',
		url: 'store.html',
		name: 'store',
		}

	],

	dialog: {
		title: 'Crumbl App',
		buttonOk: 'Accept',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a la APP !');
    }
	
});

$$(document).on('click', '#btnDialog', function (e) {
	
	app.dialog.alert('Visit Crumbs Cart for payment');
    
	var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Your order has been received.",
		  closeTimeout: 3000,
		});
		notification.open();
	
});



$$(document).on('click', '#btndialog"', function () {

	
	app.dialog.confirm('Order Confirmed!', function () {
				
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Your order has been received.",
		  closeTimeout: 3000,
		});
		notification.open();
		
	});
	

});





