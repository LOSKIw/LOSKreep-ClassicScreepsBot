let DT = require('distanceTransfer')
let rP = require('roomPlanner')
module.exports.loop = function() {
    // let dt = DT.getDistanceTransfer('sim',[[18,24]])
    // DT.displayCostMatrix(dt);
    let roomP = new rP('sim')
    let locmin = roomP.getPlan()
    let rv = new RoomVisual()
    rv.text('min',locmin[0],locmin[1])
    
}