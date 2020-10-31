let rP = require('roomPlanner')
module.exports.loop = function() {
    // let dt = DT.getDistanceTransfer('sim',[[18,24]])
    // DT.displayCostMatrix(dt);
    let roomP = new rP('sim')
    let layout = roomP.getPlan()
    roomP.disPlayLayout(layout)
}