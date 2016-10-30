// require('../styles/light.scss');
// require('../styles/light.less');
require('../styles/light.css');
import data from '../action/data.json';
import React from "react";
import {connect} from "react-redux";
import {changeLight,countTime,changeRule} from "../action";


var TrafficLightView=React.createClass({
	timer:null,
	btnByClick:function(colObj){
		// 手工转色
		console.log(colObj);
		if(this.timerId) clearTimeout(this.timerId);
		this.props.dispatch(changeLight(colObj.color));
	},
	autoPlay:function(){
		// console.log('auto:'+this.props.TrafficLightReducer.colObj.color);
		var traffL=this.props.TrafficLightReducer;
		var _self=this;
		this.timerId= setTimeout(function(){
			if(traffL.count>0) {
				//输出倒计时
				_self.props.dispatch(countTime(traffL.colObj.color,traffL.count));
			}else {
				//规则转色
				_self.props.dispatch(changeRule(traffL.colObj.color));
			}
		},1000);
	},
	componentDidUpdate:function() {

		this.autoPlay();
	},
	render:function(){
		var nowColor=this.props.TrafficLightReducer.colObj.color;//亮的灯
		console.log('now:'+nowColor);
		var lightArr=[];
		var _self=this;
		data.forEach((colItem)=>{
			var clazz='light ';
  			if(colItem['color']==nowColor){
  				clazz+=nowColor+' light_now';
  				lightArr.push(<div className={clazz} 
  					onClick={_self.btnByClick.bind(_self,colItem)}></div>);
  			}else{
  				clazz+=colItem.color;
  				lightArr.push(<div className={clazz}
  					onClick={_self.btnByClick.bind(_self,colItem)}></div>);
  			}
  		});
		return (<div>
					{lightArr}
				</div>);
	}
});

//定义本页面与Redux Store某个Reducer的映射关系方法
//参数 state 就是  store里所有的Reducer映射表 
function mapStateToProps (state) {
	//定义本页面props需要从Redux绑定那些Reducer
	// console.log(state);
	
	var _props={
		TrafficLightReducer:state.TrafficLightReducer
	};

	return _props;
}
//通过redux的 connect方法通过mapStateToProps的描述将相关的Reducer注入本页面
module.exports = connect(mapStateToProps)(TrafficLightView);