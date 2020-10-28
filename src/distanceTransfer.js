/*
code from slack screeps group #automation channel
change little for my own use
*/
let dt = {
    /**
     * 
     * @param {Array} a 
     * @param {Array} b 
     */
    isContained:function(a, b){
        let bstr = b.toString()
        for(let i = 0; i< a.length; i+=1){
            if(a[i].length<b.length){continue}
            let tempStr = a[i].toString();
            if(tempStr == bstr){return true}
        }
        return false;
    },

    /**
        @param {PathFinder.CostMatrix} foregroundPixels - object pixels. modified for output
        @param {number} oob - value used for pixels outside image bounds
        @return {PathFinder.CostMatrix}

        the oob parameter is used so that if an object pixel is at the image boundary
        you can avoid having that reduce the pixel's value in the final output. Set
        it to a high value (e.g., 255) for this. Set oob to 0 to treat out of bounds
        as background pixels.
    */
    distanceTransform:function(foregroundPixels, oob = 255) {
        var dist = foregroundPixels; // not a copy. We're modifying the input

        // Variables to represent the 3x3 neighborhood of a pixel.
        var A, B, C;
        var D, E, F;
        var G, H, I;

        var x, y, value;
        for (y = 0; y < 50; ++y) {
            for (x = 0; x < 50; ++x) {
                if (foregroundPixels.get(x, y) !== 0) {
                    A = dist.get(x - 1, y - 1); B = dist.get(x    , y - 1); C = dist.get(x + 1, y - 1);
                    D = dist.get(x - 1, y    );
                    if (y ==  0) { A = oob; B = oob; C = oob; }
                    if (x ==  0) { A = oob; D = oob; }
                    if (x == 49) { C = oob; }

                    dist.set(x, y, Math.min(A, B, C, D, 254) + 1);
                }
            }
        }

        for (y = 49; y >= 0; --y) {
            for (x = 49; x >= 0; --x) {
                ;                           E = dist.get(x   , y    ); F = dist.get(x + 1, y    );
                G = dist.get(x - 1, y + 1); H = dist.get(x   , y + 1); I = dist.get(x + 1, y + 1);
                if (y == 49) { G = oob; H = oob; I = oob; }
                if (x == 49) { F = oob; I = oob; }
                if (x ==  0) { G = oob; }

                value = Math.min(E, F + 1, G + 1, H + 1, I + 1);
                dist.set(x, y, value);
            }
        }

        return dist;
    },

    /**
        @param {string} roomName
        @return {PathFinder.CostMatrix}
    */
    walkablePixelsForRoom:function(roomName,builtList) {
        var costMatrix = new PathFinder.CostMatrix();
        let rt = Game.map.getRoomTerrain(roomName);
        for (var y = 0; y < 50; ++y) {
            for (var x = 0; x < 50; ++x) {
                if (rt.get(x, y) != 1 && !this.isContained(builtList,[x,y])) {
                    costMatrix.set(x, y, 1);
                }
            }
        }
        return costMatrix;
    },

    wallOrAdjacentToExit:function(x, y, roomName) {
        let rt = Game.map.getRoomTerrain(roomName);
        if (1 < x && x < 48 && 1 < y && y < 48) return rt.get(x, y) == 1;
        if (0 == x || 0 == y || 49 == x || 49 == y) return true;
        
        if (rt.get(x, y) == 1) return true;

        var A, B, C;
        if (x == 1) {
            A = rt.get(0, y-1); B = rt.get(0, y); C = rt.get(0, y+1);
        }
        if (x == 48) {
            A = rt.get(49, y-1); B = rt.get(49, y); C = rt.get(49, y+1);
        }
        if (y == 1) {
            A = rt.get(x-1, 0); B = rt.get(x, 0); C = rt.get(x+1, 0);
        }
        if (y == 48) {
            A = rt.get(x-1, 49); B = rt.get(x, 49); C = rt.get(x+1, 49);
        }
        return !(A == 1 && B == 1 && C == 1);
    },

    /**
        positions on which you can build blocking structures, such as walls.
        @param {string} roomName
        @return {PathFinder.CostMatrix}
    */
    blockablePixelsForRoom:function(roomName) {
        var costMatrix = new PathFinder.CostMatrix();
        for (var y = 0; y < 50; ++y) {
            for (var x = 0; x < 50; ++x) {
                if (!wallOrAdjacentToExit(x, y, roomName)) {
                    costMatrix.set(x, y, 1);
                }
            }
        }
        return costMatrix;
    },

    displayCostMatrix:function(costMatrix, color = '#ff0000') {
        var vis = new RoomVisual();

        var max = 1;
        for (var y = 0; y < 50; ++y) {
            for (var x = 0; x < 50; ++x) {
                max = Math.max(max, costMatrix.get(x, y));
            }
        }

        for (var y = 0; y < 50; ++y) {
            for (var x = 0; x < 50; ++x) {
                var value = costMatrix.get(x, y);
                if (value > 0) {
                    vis.text(costMatrix.get(x, y),x, y);
                }
            }
        }
    }

}

module.exports = dt;