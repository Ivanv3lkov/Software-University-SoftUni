function solve(input) {
    let account = input.shift().split(' ');

    for (let element of input) {

        if (element === 'Play!') {
            break;
        }

        let [command, games] = element.split(' ');

        if (command === 'Install') {
            install(games);
        } else if (command === 'Uninstall') {
            uninstall(games);
        } else if (command === 'Update') {
            update(games);
        } else {
            expansion(games);
        }
    }
    console.log(account.join(' '));

    function install(game) {
        let isInstalled = account.includes(game);

        if (!isInstalled) {
            account.push(game);
        }
    }

    function uninstall(game) {
        let gameIndex = account.indexOf(game);

        if (gameIndex !== -1) {
            account.splice(gameIndex, 1);
        }
    }

    function update(game) {
        let gameIndex = account.indexOf(game);

        if (gameIndex !== -1) {
            let updatedGame = account.splice(gameIndex, 1);
            account.push(updatedGame[0]);
            updatedGame.pop();
        }
    }

    function expansion(game) {
        let gameSplit = game.split('-');
        let gameIndex = account.indexOf(gameSplit[0]);

        if (gameIndex !== -1) {
            let gameJoin = gameSplit.join(':');
            account.splice(gameIndex + 1, 0, gameJoin);
        }
    }
}

solve(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
)
