import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import es from 'dayjs/locale/es';

dayjs.locale(es);
dayjs.extend(duration);
dayjs.extend(relativeTime);

/**
 * Clears a String of texts containing accents
 * @param {String} text
 * @returns
 */
export const replaceAccents = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

/**
 * Replace whitespace by character
 * @param {String} text
 * @param {String} char
 * @returns {String}
 */
export const replaceWhiteSpaceByCharacter = (text, char) => text.replace(/\s/g, char);

/**
 * replace all underscores with a space
 * @param {String} text
 * @returns {String}
 */
export const replaceAllUnderscoresWithWhileSpace = text => text.replace(/_/gi, ' ');

/**
 * Returns the extension of the file name
 * @param {String} text
 * @returns {String}
 */
export const getExtension = fileNamme => /[^.]+$/.exec(fileNamme)[0];

/**
 *
 * @param {Object} a
 * @param {Object} b
 * @param {String} name
 * @returns
 */
export const orderArrayByName = (a, b, name) => {
    if (a[name] < b[name]) return -1;
    if (a[name] > b[name]) return 1;
    return 0;
};

/**
 * Capital Letter First Letter
 * @param {String} text
 * @returns {String}
 */
export const CapitalizeTheFirstLetter = text => text.charAt(0).toUpperCase() + text.slice(1);

/**
 * number separated by commas, returns two decimal places
 * @param {Number} number
 * @returns {Number}
 */
export function commaSeparateNumber(number) {
    number = parseFloat(number).toFixed(2);
    while (/(\d+)(\d{3})/.test(number)) {
        number = String(number).replace(/(\d+)(\d{3})/, '$1,$2');
    }
    return number;
}

/**
 *
 * @param {String} text
 * @param {String} formatReq
 * @returns {Date}
 */
export const getDateFromString = (text, format = 'YYYY/MM/DD') => (text ? dayjs(dayjs(text, format)) : undefined);

/**
 *
 * @param {Date} date
 * @param {String} format
 * @returns {String}
 */
export const getDateFormat = (date, format = null) =>
    date && String(date).trim() !== '' && date !== 'null' ? dayjs(date).format(format || 'DD/MM/YYYY HH:MM') : '';

/**
 * Returns the current date according to format
 * @param {String} format
 * @returns {String}
 */
export const getNowFormat = format => dayjs().format(format || 'DD/MM/YYYY');

/**
 * Returns the current date
 * @returns {Date}
 */
export const getNow = () => dayjs();

/**
 * Difference in days between two dates
 * @param {Date} starDate if it is not provided, put the current date
 * @param {Date} endDate if it is not provided, put the current date
 * @param {String} type: days, months: years. if it is not provided, put the days
 * @returns {Number}
 */
export const getDdiffBetweenTwoDate = (starDate, endDate, type) =>
    dayjs(endDate ?? undefined).diff(dayjs(starDate ?? undefined), type || 'days', true);

/**
 * Add time to a date
 * @param {Date} date
 * @param {Number} amount
 * @param {String} param days, moths, yeas
 * @returns {Date}
 */
export const addTimeToADate = (date, amount, param = 'days') => dayjs(date, 'DD/MM/YYYY').add(amount, param);

/**
 * Duration Between Date And Current Date
 * @param {Date} starDate if it is not provided, put the current date
 * @param {Date} endDate if it is not provided, put the current date
 * @returns {Date}
 */
export const durationInDaysBetweenDate = (starDate, endDate) =>
    dayjs.duration(dayjs(endDate ?? undefined).diff(dayjs(starDate ?? undefined)));

/**
 * Duration Between Date And Current Date
 * @param {Date} starDate if it is not provided, put the current date
 * @param {Date} endDate if it is not provided, put the current date
 * @returns {String}
 */
export const durationInDaysBetweenDateHumanize = (starDate, endDate) =>
    dayjs.duration(dayjs(endDate ?? undefined).diff(starDate ?? undefined)).humanize();
