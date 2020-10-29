const extensionGNum = 6
const extensionGroup = [[1,0],[-1,0],[0,1],[0,-1]]
/*
config存储配置，建筑快构造，数目，建造等级
*/
let roomConfig = {
    extensionGroup:{
        num:10,
        groupLoc:[[0,0],[1,0],[-1,0],[0,1],[0,-1]],
        buildLv:[2,2,3,3,4,4,5,5,6,6,7,7,8,8]
    },

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



