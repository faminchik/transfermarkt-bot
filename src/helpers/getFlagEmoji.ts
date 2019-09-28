import emoji from 'constants/Emoji';
import flags from 'constants/Flags';

export default (country?: string | null, isSpaceOnTheRight = true) => {
    let flag = '';
    const space = ' ';

    if (!country) return flag;

    const flagEmojiKey = flags[country] as string | undefined;

    if (flagEmojiKey) {
        const flagEmoji = emoji[flagEmojiKey] as string | undefined;

        if (flagEmoji) {
            flag = flagEmoji;

            isSpaceOnTheRight ? (flag = flag + space) : (flag = space + flag);
        }
    }

    return flag;
};
