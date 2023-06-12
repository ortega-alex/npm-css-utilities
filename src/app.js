import { mailIsValied } from './utilities';

const mail = 'maimail.com';
const err = mailIsValied(mail);

console.log('Error', err);
