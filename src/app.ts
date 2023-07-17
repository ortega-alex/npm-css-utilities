import {
    CapitalizeTheFirstLetter,
    addTimeToADate,
    commaSeparateNumber,
    durationInDaysBetweenDate,
    durationInDaysBetweenDateHumanize,
    getDateFormat,
    getDateFromString,
    getDdiffBetweenTwoDate,
    getExtension,
    getNow,
    getNowFormat,
    getWeekDates,
    mailIsValied,
    nitIsValid,
    noDpiIsValid,
    onlyNumbers,
    passwordIsValid,
    phoneNumberIsValid,
    replaceAccents,
    replaceAllUnderscoresWithWhileSpace,
    replaceWhiteSpaceByCharacter
} from './utilities';

// validations
const dpi = '2320556340103';
const mail = 'maimail.com';
console.log('VALIDATIONS');
console.log('Error:', noDpiIsValid(dpi));
console.log('Error"', mailIsValied(mail));
console.log('Error:', nitIsValid(dpi));
console.log('Error:', passwordIsValid(mail));
console.log('Error:', phoneNumberIsValid(dpi));
console.log('Error:', onlyNumbers(mail));
console.log('\n');

// format
console.log('FORMAT');
const string = 'hola buenos días';
const dateString = '2023-06-12';
console.log(replaceAccents(string));
console.log(replaceWhiteSpaceByCharacter(string, '/'));
console.log(replaceAllUnderscoresWithWhileSpace('Hello_World'));
console.log(getExtension('file.pdf'));
console.log(CapitalizeTheFirstLetter(string));
console.log(commaSeparateNumber(dpi));
const date = getDateFromString(dateString);
console.log(date);
console.log(getDateFormat(date));
console.log(getNowFormat('DD-MM-YYYY'));
const now = getNow();
console.log(now);
console.log(getDdiffBetweenTwoDate(getDateFromString('2023-07-12')), now);
const addTime = addTimeToADate(now, 18);
console.log(addTime);
console.log(durationInDaysBetweenDate(now, addTime));
console.log(durationInDaysBetweenDateHumanize(addTime));
console.log('\n');
console.log(getWeekDates(dateString));
