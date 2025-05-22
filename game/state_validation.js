var ruleBook = { // default rules
    "captureAgainstWalls": false,
    "simpleKingCapture": true
}

function broadcastEndState(endState) {
    console.log(`broadcastEndState called with: ${endState}`);
    if (endState === 'attacker-win') {
        storageData.end_state = {
            state: 'attacker-win',
            message: 'Attacker Wins'
        }
    }
    if (endState === 'defender-win') {
        storageData.end_state = {
            state: 'defender-win',
            message: 'Defender Wins'
        }
    }
}

function validateMove(playerUUID, turn, move, stateData, tileData, rules) {
    playerUUID = playerUUID
    turn = turn
    move = move
    newStateData = stateData
    tileData = tileData
    boardSize = newStateData.length //determine board size without having to add another rule
    if (rules) {
        Object.entries(rules).forEach(([key, value]) => { //update rulebook
            ruleBook[key] = value
        })
    }

    directions = [
        { dx: 0, dy: -1 }, // Up
        { dx: 0, dy: 1 },  // Down
        { dx: -1, dy: 0 }, // Left
        { dx: 1, dy: 0 }   // Right
    ]

    if (newStateData[move.y][move.x].type === 'defender-king' && turn === 'defender') {
        // opponent moved king, check for a win
        if (tileData[move.y][move.x] === 'goal') {
            broadcastEndState('defender-win')
        }
    }

    affectedOpponents = []
    directions.forEach(direction => {
        // find all opponent pieces adjacent to last moved piece
        nx = move.x + direction.dx
        ny = move.y + direction.dy

        if (
            ny >= 0 && ny < boardSize && // Check if ny is within bounds
            nx >= 0 && nx < boardSize && // Check if nx is within bounds
            newStateData[ny][nx] !== null && // Ensure the cell is not null
            !newStateData[ny][nx].type.includes(turn) // Check if it's an opponent piece
        ) {
            // client moved next to an opponent; check other side of opponent
            opponentData = newStateData[ny][nx]

            nnx = move.x + (direction.dx * 2)
            nny = move.y + (direction.dy * 2)
            if (
                nnx >= 0 && nnx < boardSize && // Check if nnx is within bounds
                nny >= 0 && nny < boardSize // Check if nny is within bounds
            ) {
                // opponent is not against a wall, check for sandwich capture
                if (newStateData[nny][nnx] !== null && newStateData[nny][nnx].type.includes(turn)) {
                    if (opponentData.type === 'defender-king' && ruleBook.simpleKingCapture === false) {
                        let nFriendlyAroundKing = 2 // we know we already have the king sandwiched
                        // Determine perpendicular directions
                        perpendicularDirections = direction.dx === 0
                            ? [{ dx: -1, dy: 0 }, { dx: 1, dy: 0 }] // Horizontal if current is vertical
                            : [{ dx: 0, dy: -1 }, { dx: 0, dy: 1 }]; // Vertical if current is horizontal

                        // Check the two remaining sides of opponent king
                        perpendicularDirections.forEach(perpendicular => {
                            pnnx = nx + perpendicular.dx; // nx is the opponent's x-coordinate
                            pnny = ny + perpendicular.dy; // ny is the opponent's y-coordinate

                            if (
                                pnnx >= 0 && pnnx < boardSize && // Check if sideX is within bounds
                                pnny >= 0 && pnny < boardSize && // Check if sideY is within bounds
                                newStateData[pnny][pnnx] !== null && // Ensure the cell is not null
                                newStateData[pnny][pnnx].type.includes(turn) // Check if it's a friendly piece
                            ) {
                                nFriendlyAroundKing++
                            }
                        })

                        if (nFriendlyAroundKing === 4) {
                            // we have the king surrounded. Capture and win Attackers
                            newStateData[ny][nx] = null
                            broadcastEndState('attacker-win')
                        } 
                    }
                    else {
                        if (newStateData[ny][nx].type === 'defender-king') {broadcastEndState('attacker-win')
                        }
                        newStateData[ny][nx] = null // capture piece
                        
                    }
                }

            } else {
                // opponent is up against a wall
                if (ruleBook.captureAgainstWalls === true && opponentData.type !== 'defender-king') {
                    newStateData[ny][nx] = null // capture piece
                }
            }
        }
    });
    return newStateData
}