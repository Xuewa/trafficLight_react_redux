import * as types from './ActionTypes'; 
import data from './data.json';

/**
 * 交通灯变色
 */
export function changeLight(color){  
  return (dispatch, getState) => { 
  		var colObj;
  		data.forEach((colItem)=>{
  			if(colItem['color']==color)
  				colObj=colItem;
  		});
  		// console.log(colObj);
        dispatch({
           type:types.CHANGE_COLOR,
           colObj:colObj
        }); 
  }
}; 
export function countTime(color,count){  
  return (dispatch, getState) => { 
      var colObj;
      data.forEach((colItem)=>{
        if(colItem['color']==color)
          colObj=colItem;
      });
      dispatch({
           type:types.COUNT_TIME,
           colObj:colObj,
           count:count
        }); 
  }
}; 
//更换规则
export function changeRule(color){ 
  // console.log('--changeRule--'); 
  return (dispatch, getState) => {
    dispatch({
         type:types.CHANGE_RULE,
         color:color
      }); 
  }
} 
 