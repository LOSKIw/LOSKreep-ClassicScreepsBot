let DT = require('distanceTransfer')

module.exports.loop = function() {
    let dt = DT.getDistanceTransfer('sim',[[18,24]])
    let rv = new RoomVisual()
    rv.text('qwe',18,24)
    DT.displayCostMatrix(dt);
}