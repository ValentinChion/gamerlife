const async = require('async');

const util = {
    async getNextLevel(level,xp) {
        if(xp) {
            async.whilst(
                function () {
                    return xp >= Math.round((level + 99) + level * Math.sqrt(((level - 1) * 50) + 1));
                },
                function (callback) {
                    xp = xp - Math.round((level + 99) + level * Math.sqrt(((level - 1) * 50) + 1));
                    level = level + 1;
                    callback(null, xp, level);
                },
                function (err, newXp, newLevel) {
                    if(newLevel && newXp) {
                        xp = newXp;
                        level = newLevel;
                    }
                }
            );
            return {level: level, xp: xp, xpNextLevel: Math.round((level + 99) + level * Math.sqrt(((level - 1) * 50) + 1))}
        } else {
            return {xpNextLevel:Math.round((level + 99) + level * Math.sqrt(((level - 1) * 50) + 1))};
        }
    },

    getXpBoost(task) {
        return Math.floor((task - 30) * (task / 20))
    },
};

module.exports = util;
