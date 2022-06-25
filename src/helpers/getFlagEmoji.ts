import emoji from 'constants/Emoji';
import flags from 'constants/Flags';

export default (country?: string | null, isSpaceOnTheRight = true) => {
    let flag = '';
    const space = ' ';

    if (!country) return flag;

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
