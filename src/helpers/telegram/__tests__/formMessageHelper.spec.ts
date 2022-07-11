import {
    formTransferMessage,
    formTeamTransferMessage,
    formTeamTransferHeader,
    formClubsSearchResultMessage,
    formPlayersSearchResultMessage
} from 'helpers/telegram/formMessageHelper';
import type { TClubEntity, TTeamTransferEntity, TTransferFullEntity, TPlayerEntity } from 'ts/EntitiesTS';

describe('formMessageHelper', () => {
    describe('#formTransferMessage', () => {
        test('should return transfer message correctly', () => {
            const transferInfo: TTransferFullEntity = {
                name: 'Sérgio Oliveira',
                age: '30',
                leftTeam: 'FC Porto',
                joinedTeam: 'Galatasaray',
                transferDate: 'Jul 9, 2022',
                marketValue: '€12.00m',
                profileLink: '/sergio-oliveira/profil/spieler/112465',
                nationality: 'Portugal',
                leftTeamCountry: 'Portugal',
                joinedTeamCountry: 'Turkey',
                fee: '€3.00m',
                highestMarketValue: '€19.00m'
            };

            const result = formTransferMessage(transferInfo);
            expect(result).toMatchInlineSnapshot(`
                "*Jul 9, 2022*
                🇵🇹 *Sérgio Oliveira* (€12.00m | 30 y.o.)

                🇵🇹 *FC Porto* → *Galatasaray* 🇹🇷
                *€3.00m*"
            `);
        });

        test('should return updated transfer message correctly', () => {
            const transferInfo: TTransferFullEntity = {
                name: 'Henry Onyekuru',
                age: '25',
                leftTeam: 'Olympiacos',
                joinedTeam: 'Adana Demirspor',
                transferDate: 'Jul 10, 2022',
                marketValue: '€5.00m',
                profileLink: '/henry-onyekuru/profil/spieler/380415',
                nationality: 'Nigeria',
                leftTeamCountry: 'Greece',
                joinedTeamCountry: 'Turkey',
                fee: 'loan transfer',
                highestMarketValue: '€13.00m'
            };

            const result = formTransferMessage(transferInfo, false);
            expect(result).toMatchInlineSnapshot(`
                "*Jul 10, 2022*
                🇳🇬 *Henry Onyekuru* (€5.00m | 25 y.o.)

                🇬🇷 *Olympiacos* → *Adana Demirspor* 🇹🇷
                *loan transfer*
                (transfer info has been updated)"
            `);
        });
    });

    describe('#formTeamTransferMessage', () => {
        test('should return team transfer message correctly', () => {
            const teamTransferInfo: TTeamTransferEntity = {
                name: 'Adama Traoré',
                age: '26',
                marketValue: '€20.00m',
                secondPartyTeam: 'Wolves',
                nationality: 'Spain',
                secondPartyTeamCountry: 'England',
                fee: 'End of loan'
            };

            const result = formTeamTransferMessage(teamTransferInfo, '→', 10);
            expect(result).toMatchInlineSnapshot(`
                "*10*. 🇪🇸 *Adama Traoré* (€20.00m | 26 y.o.)

                → 🏴󠁧󠁢󠁥󠁮󠁧󠁿 *Wolves* | *End of loan*"
            `);
        });
    });

    describe('#formTeamTransferHeader', () => {
        test('should return team transfer header correctly', () => {
            const clubInfo: TClubEntity = {
                clubName: 'Tottenham Hotspur',
                clubLink: '/tottenham-hotspur/startseite/verein/148',
                country: 'England',
                totalMarketValue: '€750.00m'
            };

            const result = formTeamTransferHeader(clubInfo, 'Arrivals');
            expect(result).toMatchInlineSnapshot(`
                "🏴󠁧󠁢󠁥󠁮󠁧󠁿 *Tottenham Hotspur* | *Arrivals*:

                "
            `);
        });
    });

    describe('#formClubsSearchResultMessage', () => {
        test('should return clubs search result message correctly', () => {
            const searchClubsResult: TClubEntity[] = [
                {
                    clubName: 'Real Madrid',
                    totalMarketValue: '€857.00m',
                    clubLink: '/real-madrid/startseite/verein/418',
                    country: 'Spain'
                },
                {
                    clubName: 'Manchester United',
                    totalMarketValue: '€684.30m',
                    clubLink: '/manchester-united/startseite/verein/985',
                    country: 'England'
                },
                {
                    clubName: 'Borussia Dortmund',
                    totalMarketValue: '€510.95m',
                    clubLink: '/borussia-dortmund/startseite/verein/16',
                    country: 'Germany'
                },
                {
                    clubName: 'Dinamo Tbilisi',
                    totalMarketValue: '-',
                    clubLink: '/dinamo-tiflis/startseite/verein/663',
                    country: 'Georgia'
                }
            ];

            const result = formClubsSearchResultMessage(searchClubsResult);
            expect(result).toMatchInlineSnapshot(`
                "*1. 🇪🇸 Real Madrid* (€857.00m)
                *2. 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United* (€684.30m)
                *3. 🇩🇪 Borussia Dortmund* (€510.95m)
                *4. 🇬🇪 Dinamo Tbilisi* "
            `);
        });
    });

    describe('#formPlayersSearchResultMessage', () => {
        test('should return players search result message correctly', () => {
            const searchPlayersResult: TPlayerEntity[] = [
                {
                    name: 'Bernardo Silva',
                    clubName: 'Manchester City',
                    age: '27',
                    marketValue: '€80.00m',
                    playerLink: '/bernardo-silva/profil/spieler/241641',
                    nationality: 'Portugal'
                },
                {
                    name: 'David Silva',
                    clubName: 'Real Sociedad',
                    age: '36',
                    marketValue: '€4.00m',
                    playerLink: '/david-silva/profil/spieler/35518',
                    nationality: 'Spain'
                },
                {
                    name: 'Thiago Silva',
                    clubName: 'Chelsea FC',
                    age: '37',
                    marketValue: '-',
                    playerLink: '/thiago-silva/profil/spieler/29241',
                    nationality: 'Brazil'
                },
                {
                    name: 'André Silva',
                    clubName: 'RB Leipzig',
                    age: '26',
                    marketValue: '€32.00m',
                    playerLink: '/andre-silva/profil/spieler/198008',
                    nationality: 'Portugal'
                }
            ];

            const result = formPlayersSearchResultMessage(searchPlayersResult);
            expect(result).toMatchInlineSnapshot(`
                "*1. 🇵🇹 Bernardo Silva* (€80.00m | 27 y.o.)
                *2. 🇪🇸 David Silva* (€4.00m | 36 y.o.)
                *3. 🇧🇷 Thiago Silva* (37 y.o.)
                *4. 🇵🇹 André Silva* (€32.00m | 26 y.o.)"
            `);
        });
    });
});
