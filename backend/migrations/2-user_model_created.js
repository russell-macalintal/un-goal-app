'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 2,
    "name": "user_model_created",
    "created": "2022-02-25T17:25:19.466Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "users",
        {
            "UserId": {
                "type": Sequelize.INTEGER,
                "field": "UserId",
                "primaryKey": true,
                "autoIncrement": true,
                "allowNull": false
            },
            "FirstName": {
                "type": Sequelize.STRING(45),
                "field": "FirstName",
                "allowNull": false
            },
            "LastName": {
                "type": Sequelize.STRING(45),
                "field": "LastName",
                "allowNull": false
            },
            "location": {
                "type": Sequelize.STRING(45),
                "field": "location",
                "allowNull": false
            },
            "points": {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "points",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "defaultValue": Sequelize.Literal,
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "defaultValue": Sequelize.Literal
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
