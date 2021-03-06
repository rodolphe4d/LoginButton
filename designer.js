(function(LoginButton) {
    "use strict";

	LoginButton.setWidth(92);
	LoginButton.setHeight(34);

    LoginButton.addStates(':hover', ':active', ':focus', ':disabled');
    LoginButton.addStates('.logout');

    LoginButton.customizeProperty('loginField', {title: 'Login field ID'});
    LoginButton.customizeProperty('passwordField', {title: 'Password field ID'});
    LoginButton.customizeProperty('redirectUrlLogout', {title: 'Logout URL redirect'});
    LoginButton.customizeProperty('redirectUrl', {title: 'Login URL redirect'});

    LoginButton.addEvents({ 
        'name':'action' 
    },{ 
        'name':'error', 
        'category':'Login Events' 
    },{ 
        'name':'login', 
        'category':'Login Events'
    },{
        'name':'logout', 
        'category':'Logout Events'
    });
});
