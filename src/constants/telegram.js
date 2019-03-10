import _ from 'lodash';

export const MAX_MESSAGE_SYMBOLS_NUMBER = 4096;
export const MESSAGE_DELIMITER = `\r\n${_.repeat('\\_', 30)}\r\n\r\n`;
export const ITEMS_COUNT_PER_MESSAGE = 20;
export const CALLBACK_DATA_MAX_SYMBOLS_NUMBER = 64;
