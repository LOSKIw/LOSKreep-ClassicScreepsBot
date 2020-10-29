const extensionGNum = 6
const extensionGroup = [[1,0],[-1,0],[0,1],[0,-1]]
let buildingDict = {
    '0': '0',
    '1': STRUCTURE_STORAGE,
    '2': STRUCTURE_EXTENSION,
    '3': STRUCTURE_ROAD,
    '4': STRUCTURE_TOWER,
    '5': STRUCTURE_SPAWN,
    '6': STRUCTURE_LINK,
    '7': STRUCTURE_POWER_SPAWN,
    '8': STRUCTURE_NUKER,
    '9': STRUCTURE_TERMINAL,
    '10': STRUCTURE_FACTORY,
    '11': STRUCTURE_CONTAINER
}
/*
config存储配置，建筑块构造，数目，建造等级
每个建筑块:
    num:块数目【目前仅ext块有多个
    groupLoc:块内相对位置，数组，元素为数组，元素数组格式为[x,y]
    buidingType:对应groupLoc,建筑类型
    buidRcl:对应groupLoc，对应建造的rcl【ext无等级一说，内部为每个块对应的起建等级
*/



let roomConfig = {
    extensionGroup:{
        num:10,
        groupLoc:[[0,0],[1,0],[-1,0],[0,1],[0,-1]],
        buildingType:[2,2,2,2,2],
        buildRcl:[2,2,3,3,4,4,5,5,6,6,7,7,8,8]
    },
    coreGroup:{
        num:1,
        groupLoc:[[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1]],
        buildingType:[5,1,7,5,10,9,5,6],
        buildRcl:[1,4,8,7,7,6,8,6]
    },
    towerGroup:{
        num:1,
        groupLoc:[[-1,1],[0,1],[1,0],[1,-1],[0,-1],[-1,0],[0,0]],
        buildingType:[4,4,4,4,4,4,11],
        buildRcl:[3,5,7,8,8,8,7]
    }

}
class roomPlan{
    /**
     * 
     * @param {String} roomName 
     */
    constructor(roomName){
        this.room = roomName
    }   
    getPlan(){
        
        let layout = {
            spawn: [],
            extension: [],
            extractor: [],
            factory: [],
            lab: [],
            tower: [],
            link: [],
            nuker: [],
            observer: [],
            powerSpawn: [],
            storage: [],
            terminal: [],
            container: [],
            road: []
        };

        
    }
}



