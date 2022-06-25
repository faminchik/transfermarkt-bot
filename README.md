# [Transfermarkt Bot](https://t.me/transfermarktbot)

Unofficial [Telegram](https://telegram.org/) bot of the [Transfermarkt](https://www.transfermarkt.com) service.

---

The goal of the bot is to inform the user about new happened [**interesting**](#interesting-transfers-algorithm) football transfers.

![Transfers example](https://user-images.githubusercontent.com/31989569/93109085-462f2200-f6bc-11ea-8ac1-facca8f956a8.JPG)

## Message Structure

The Bot sends messages with information about transfers which have the following structure:

```
[transfer date]
[player nationality flag] [player] ([player market value] | [player age])

[country flag of departure team] [departure team] → [arrival team] [country flag of arrival team]
[transfer fee]
```

## Bot Commands

-   [**`/start`**](#start)
-   [**`/simplestart`**](#simplestart)
-   [**`/stop`**](#stop)
-   [**`/team <team_name>`**](#team-team_name)

### `/start`

The Bot subscribes the user to updates and sends **interesting** transfers for the last 2 days.

### `/simplestart`

The Bot just subscribes the user to updates.

### `/stop`

The Bot unsubscribes the user from updates.

### `/team <team_name>`

The Bot sends to the user maximum 3 found teams according to the `<team_name>` argument.

![Found teams](https://user-images.githubusercontent.com/31989569/93117113-fdc93180-f6c6-11ea-9ef7-90076218b1db.JPG)

After the user has made a choice, the Bot sends all **arrival** and **departure** transfers during the last transfer window.

#### Arrivals:

![Arrivals](https://user-images.githubusercontent.com/31989569/93117221-2c470c80-f6c7-11ea-9c0f-274d9d2fa2ea.JPG)

#### Departures:

![Departures](https://user-images.githubusercontent.com/31989569/93117217-2b15df80-f6c7-11ea-8013-d908c503af26.JPG)

## Interesting Transfers Algorithm

In order to skip tons of redundant transfers, so-called _Interesting Transfers Algorithm_ were implemented.

If one the following conditions is true, the transfer is marked as **interesting**:

-   Transfer or loan fee ≥ **€5.00m**
-   Player market value ≥ **€5.00m**
-   The highest player market value during the career ≥ **€10.00m**
