'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "location" from table "users"
 * removeColumn "points" from table "users"
 * addColumn "Username" to table "users"
 * addColumn "Email" to table "users"
 * addColumn "Skill" to table "users"
 * addColumn "Points" to table "users"
 * addColumn "Password" to table "users"
 * addColumn "Location" to table "users"
 * addColumn "Admin" to table "users"
 *
 **/

var info = {
    "revision": 3,
    "name": "user_model_updated",
    "created": "2022-02-25T18:21:21.165Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["users", "location"]
    },
    {
        fn: "removeColumn",
        params: ["users", "points"]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "Username",
            {
                "type": Sequelize.STRING,
                "field": "Username",
                "unique": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "Email",
            {
                "type": Sequelize.STRING,
                "field": "Email",
                "unique": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "Skill",
            {
                "type": Sequelize.STRING(45),
                "field": "Skill",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "Points",
            {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "Points",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "Password",
            {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "Password",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "Location",
            {
                "type": Sequelize.STRING(45),
                "field": "Location",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "Admin",
            {
                "type": Sequelize.BOOLEAN,
                "field": "Admin",
                "defaultValue": false,
                "allowNull": false
            }
        ]
    }
];

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
