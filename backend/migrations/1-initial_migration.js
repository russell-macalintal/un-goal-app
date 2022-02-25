'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "test", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2022-02-25T17:15:07.343Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "test",
        {
            "idtest": {
                "type": Sequelize.INTEGER,
                "field": "idtest",
                "primaryKey": true,
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
