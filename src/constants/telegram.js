import _ from 'lodash';

export const MAX_NUMBER_MESSAGE_SYMBOLS = 4096;
export const MESSAGE_DELIMITER = `\r\n${_.repeat('\\_', 30)}\r\n\r\n`;
export const MESSAGE_COUNT_PER_MESSAGE = 20;
