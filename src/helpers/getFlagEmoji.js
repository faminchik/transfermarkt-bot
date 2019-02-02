import emoji from 'constants/emoji';
import flags from 'constants/flags';

export default (country, isSpaceOnTheRight = true) => {
    let flag = '';
    const space = ' ';

    const flagEmojiKey = flags[country];

    if (flagEmojiKey) {
        const flagEmoji = emoji[flagEmojiKey];

        if (flagEmoji) {
            flag = flagEmoji;

            isSpaceOnTheRight ? (flag = flag + space) : (flag = space + flag);
        }
    }

    return flag;
};
