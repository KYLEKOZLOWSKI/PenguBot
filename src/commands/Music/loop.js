const MusicCommand = require("../../lib/structures/MusicCommand");

module.exports = class extends MusicCommand {

    constructor(...args) {
        super(...args, {
            requireDJ: true,
            requireMusic: true,
            cooldown: 10,
            aliases: ["loopsong", "repeat", "ripeti", "répéte", "repite"],
            requiredPermissions: ["USE_EXTERNAL_EMOJIS"],
            description: language => language.get("COMMAND_LOOP_DESCRIPTION"),
            extendedHelp: "No extended help available.",

            usage: "[queue|song]"
        });
    }

    async run(msg, [option = "song"]) {
        const { music } = msg.guild;
        if (!music.playing) return msg.sendMessage(`${this.client.emotes.cross} There's currently no music playing!`);

        if (option === "song") music.looping = !music.looping;
        if (option === "queue") {
            if (music.queue.length * 2 > 1000 && !this.client.config.main.patreon) throw `${this.client.emotes.cross} **Sorry but the maximum queue size is 1000 songs. If you want to bypass this limit, consider becoming a Patron at <https://patreon.com/PenguBot>***`;
            if (music.queue.length * 2 > 1000 && !this.client.config.main.patreon) throw `${this.client.emotes.cross} **${msg.language.get("MUSICIF_QUEUE_LIMIT_REACHED")} ***`;
            music.queue = music.queue.concat(music.queue);
        }

        return msg.sendMessage(`⏯ | ***${option === "song" ? "Song" : "Queue"} looping is now ${option === "queue" ? "The whole queue will now repeat." : music.looping ? "Enabled" : "Disabled"}***`);
    }

};
