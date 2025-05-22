const boards = {
    'hnefetafl': {
        "board_size": "11",
        "tile_map": {
            "A": "tile",
            "B": "throne",
            "C": "goal",
        },
        "piece_map": {
            "O": null,
            "A": "attacker-pawn",
            "D": "defender-pawn",
            "K": "defender-king",
        },
        "piece_size": "0.8", // 80% of the cell
        "tile_layout": [
            ["C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "C"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "B", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "C"],
        ],

        "pieces_layout": [
            ["O", "O", "O", "A", "A", "A", "A", "A", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "A", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["A", "O", "O", "O", "O", "D", "O", "O", "O", "O", "A"],
            ["A", "O", "O", "O", "D", "D", "D", "O", "O", "O", "A"],
            ["A", "A", "O", "D", "D", "K", "D", "D", "O", "A", "A"],
            ["A", "O", "O", "O", "D", "D", "D", "O", "O", "O", "A"],
            ["A", "O", "O", "O", "O", "D", "O", "O", "O", "O", "A"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "A", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "A", "A", "A", "A", "A", "O", "O", "O"],
        ],
    },
    'demo': {
        "board_size": "11",
        "tile_map": {
            "A": "tile",
            "B": "throne",
            "C": "goal",
        },
        "piece_map": {
            "O": null,
            "A": "attacker-pawn",
            "D": "defender-pawn",
            "K": "defender-king",
        },
        "piece_size": "0.8", // 80% of the cell
        "tile_layout": [
            ["C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "C"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "B", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
            ["C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "C"],
        ],

        "pieces_layout": [
            ["O", "O", "O", "A", "A", "A", "A", "A", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "A", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["A", "O", "O", "O", "O", "O", "O", "O", "O", "O", "A"],
            ["A", "O", "O", "O", "O", "O", "O", "O", "O", "O", "A"],
            ["A", "A", "O", "O", "O", "K", "O", "O", "O", "A", "A"],
            ["A", "O", "O", "O", "O", "O", "O", "O", "O", "O", "A"],
            ["A", "O", "O", "O", "O", "O", "O", "O", "O", "O", "A"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "A", "O", "O", "O", "D", "O"],
            ["O", "O", "O", "A", "A", "A", "A", "A", "O", "O", "O"],
        ],
    },

}