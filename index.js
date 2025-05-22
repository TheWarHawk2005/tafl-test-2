async function startGame() {
    registerNewGame()
}

async function registerNewGame() {
    const registerData = {
        "board": "hnefetafl",
        "registered_players": {
            "attacker": undefined,
            "defender": undefined,
            "spectators": []
        },
        "state_data": {},
        "turn": "attacker",
    };

    var storage = new JSONBlobRequest()
    storage.post(registerData, function(err, response) {
        gameId = response.location.split('http://jsonblob.com/api/jsonBlob/')[1]
        document.location = './game#'+gameId
    })
}