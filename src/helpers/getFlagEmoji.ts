import emoji from 'constants/Emoji';
import flags from 'constants/Flags';

const getFlagEmoji = (country: string | null | undefined): string => {
    if (!country) return '';

    const flagEmojiKey = flags[country];
    if (!flagEmojiKey) return '';

    const flagEmoji = emoji[flagEmojiKey];
    return flagEmoji || '';
};

export default getFlagEmoji;
