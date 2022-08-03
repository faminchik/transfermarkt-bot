import getFlagEmoji from 'helpers/getFlagEmoji';

describe('getFlagEmoji', () => {
    test('should return empty string if country is null', () => {
        const result = getFlagEmoji(null);
        expect(result).toBe('');
    });

    test('should return empty string if country is empty string', () => {
        const result = getFlagEmoji('');
        expect(result).toBe('');
    });

    test('should return empty string if country is incorrect', () => {
        const result = getFlagEmoji('Random');
        expect(result).toBe('');
    });

    test('should return correct flag emoji', () => {
        let result = getFlagEmoji('Spain');
        expect(result).toBe('🇪🇸');

        result = getFlagEmoji('England');
        expect(result).toBe('🏴󠁧󠁢󠁥󠁮󠁧󠁿');

        result = getFlagEmoji('Italy');
        expect(result).toBe('🇮🇹');
    });
});
