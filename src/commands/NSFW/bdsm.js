const Command = require("../../lib/structures/PenguCommand");
const data = require("../../lib/constants/nsfw/amateur");

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            cooldown: 8,
            upvoteOnly: true,
            aliases: ["nsfwbdsm"],
            requiredPermissions: ["ATTACH_IMAGES", "EMBED_LINKS"],
            description: language => language.get("COMMAND_BDSM_DESCRIPTION"),
            extendedHelp: "No extended help available."
        });
    }

    async run(msg) {
        if (!msg.channel.nsfw) return msg.sendMessage(`<:penguError:435712890884849664> ***This channel is not NSFW so I can't send it here...***`);
        return msg.sendMessage(data[Math.floor(Math.random() * data.length)]);
    }

};
