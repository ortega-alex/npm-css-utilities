/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs, { Dayjs } from 'dayjs';
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
export const replaceAccents = (text: string): string => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

/**
 * Replace whitespace by character
 * @param {String} text
 * @param {String} char
 * @returns {String}
 */
export const replaceWhiteSpaceByCharacter = (text: string, char: string): string => text.replace(/\s/g, char);

/**
 * replace all underscores with a space
 * @param {String} text
 * @returns {String}
 */
export const replaceAllUnderscoresWithWhileSpace = (text: string): string => text.replace(/_/gi, ' ');

/**
 * Returns the extension of the file name
 * @param {String} text
 * @returns {String}
 */
export const getExtension = (fileNamme: string): string => {
    const ext = /[^.]+$/.exec(fileNamme);
    return ext == null ? '' : ext[0];
};

/**
 *
 * @param {any} a
 * @param {any} b
 * @param {number} name
 * @returns
 */
export const orderArrayByName = (a: any, b: any, name: string): number => {
    if (a[name] < b[name]) return -1;
    if (a[name] > b[name]) return 1;
    return 0;
};

/**
 * Capital Letter First Letter
 * @param {String} text
 * @returns {String}
 */
export const CapitalizeTheFirstLetter = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

/**
 * number separated by commas, returns two decimal places
 * @param {String | Number} number
 * @returns {Number}
 */
export const commaSeparateNumber = (number: string | number): string => {
    number = parseFloat(String(number)).toFixed(2);
    while (/(\d+)(\d{3})/.test(number)) {
        number = String(number).replace(/(\d+)(\d{3})/, '$1,$2');
    }
    return number;
};

/**
 *
 * @param {String} text
 * @param {String} formatReq
 * @returns {Dayjs}
 */
export const getDateFromString = (text: string, format?: string): Dayjs => dayjs(dayjs(text, format || 'YYYY/MM/DD'));

/**
 *
 * @param {Dayjs} date
 * @param {String} format
 * @returns {String}
 */
export const getDateFormat = (date: Dayjs, format?: string): string => dayjs(date ?? undefined).format(format || 'DD/MM/YYYY HH:MM');

/**
 * Returns the current date according to format
 * @param {String} format
 * @returns {String}
 */
export const getNowFormat = (format?: string) => dayjs().format(format || 'DD/MM/YYYY');

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
export const getDdiffBetweenTwoDate = (starDate?: Dayjs, endDate?: Dayjs, type?: 'days' | 'years' | 'months') =>
    dayjs(endDate ?? undefined).diff(dayjs(starDate ?? undefined), type || 'days', true);

/**
 * Add time to a date
 * @param {Date} date
 * @param {Number} amount
 * @param {String} param days, moths, yeas
 * @returns {Date}
 */
export const addTimeToADate = (date: Dayjs, amount: number, param?: 'days' | 'years' | 'months') =>
    dayjs(date, 'DD/MM/YYYY').add(amount, param || 'days');

/**
 * Duration Between Date And Current Date
 * @param {Date} starDate if it is not provided, put the current date
 * @param {Date} endDate if it is not provided, put the current date
 * @returns {Date}
 */
export const durationInDaysBetweenDate = (starDate?: Dayjs, endDate?: Dayjs): string =>
    String(dayjs.duration(dayjs(endDate ?? undefined).diff(dayjs(starDate ?? undefined))));

/**
 * Duration Between Date And Current Date
 * @param {Date} starDate if it is not provided, put the current date
 * @param {Date} endDate if it is not provided, put the current date
 * @returns {String}
 */
export const durationInDaysBetweenDateHumanize = (starDate?: Dayjs, endDate?: Dayjs): string =>
    dayjs.duration(dayjs(endDate ?? undefined).diff(starDate ?? undefined)).humanize();
