let rP = require('roomPlanner')
module.exports.loop = function() {
    let roomP = new rP('sim')
    let layout = roomP.getPlan()
    roomP.disPlayLayout(layout)
}