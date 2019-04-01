const klasa = require("klasa");
const discord = require("discord.js");
const kdh = require("klasa-dashboard-hooks");
const { version } = require("../package.json");

module.exports = {
    ...klasa,
    ...discord,
    ...kdh,
    Util: require("./lib/util/Util"),
    util: require("./lib/util/Util"),
    config: require("../config.json"),
    klasaUtil: klasa.util,
    discordUtil: discord.Util,
    kdhUtil: kdh.Util,
    version,
    klasaVersion: klasa.version,
    discordVersion: discord.version,
    klasaConstants: klasa.constants,
    discordConstants: discord.Constants,
    Command: require("./lib/structures/PenguCommand"),
    Song: require("./lib/structures/Song"),
    RawEvent: require("./lib/structures/RawEvent")
};
