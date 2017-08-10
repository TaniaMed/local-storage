'use strict';

const signInHtm =  documant.getElementsByClassName('sign-in-htm');
const signUpHtm =  documant.getElementsByClassName('sign-up-htm');

const errorMessage =  documant.getElementsByClassName('error-message');

const XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;


const xhrSignIn = new XHR();
xhrSignIn.open('POST', 'https://neto-api.herokuapp.com/signin', true);

const xhrSignUp = new XHR();
xhrSignUp.open('POST', ' https://neto-api.herokuapp.com/signup', true);

//.send 
