/**
 * 
 * 本页面是用于建立ProductIndex页面所需要用到的相关数据模型以及相应数据操作
 * 也是redux的 Reducer
 */
import * as types from '../action/ActionTypes'; 
import CreateReducer from 'fyBase/reducers/CreateReducer';
// 应该在此处添加data.json

//TrafficLight的页面数据模型 
const initState = {
	colObj:{
		color:'red',
		time:7
	},
    count:0,
    // timerId:null
}
 

/**
 * [TrafficLightReducer description]
 * @param {[type]} _model 没有实例化的模型数据，需要在reducer执行前执行初始化
 * @param {[type]} action 来自action的参数集合 
 */
var  TrafficLightReducer = CreateReducer(initState, {
    [types.CHANGE_COLOR](state,action){
    	var colObj=action.colObj?action.colObj:state.colObj;
    	if(state.colObj.color!=colObj.color)
    		console.log('手工变:'+state.colObj.color+'-->'+colObj.color);
     	var _state={
     		colObj:colObj,
            count:colObj.time
     	};	
        return _state;
    },
    [types.COUNT_TIME](state,action){
        var count=action.count>0?action.count-1:0;
        console.log(action.colObj.color+':'+count+'s');
        var _state={
            colObj:action.colObj,
            count:count
        };  
        return _state;
    },
    [types.CHANGE_RULE](state,action){
        var _state;
        switch(action.color){
            case 'red':  
                _state={
                    colObj:{
                        color:'green',
                        time:5
                    },
                    count:5,
                };
                break;
            case 'yellow':
               _state={
                    colObj:{
                        color:'red',
                        time:7
                    },
                    count:7,
                };
                break;
            case 'green':
                _state={
                    colObj:{
                        color:'yellow',
                        time:3
                    },
                    count:3,
                };
                break;
            default:
                _state={
                    colObj:{
                        color:'red',
                        time:7
                    },
                    count:7,
                };
                break;
        }
        console.log('自动变:'+action.color+'-->'+_state.colObj.color);
        return _state;
    }
});

module.exports=TrafficLightReducer;