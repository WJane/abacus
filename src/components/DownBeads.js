'use strict';

import React from 'react'
import {render} from 'react-dom'
export default class DownBeads extends React.Component {
//不知道为什么根据parent.props.children取不到dom
    handledownClick(e){
        let count = e.target.getAttribute('data-index');
        let parent = e.target.parentNode;
        let flag = this.props.nums[count] == 120-count*40;

        if(flag) {
    			for(var i=0;i<=count;i++){
    			    this.props.nums[i] += 40;
              parent.childNodes[i].style.transition = '.5s'
    			    parent.childNodes[i].style.transform = 'translateY(-40px)'
              parent.childNodes[i].style.background = 'white'
              parent.childNodes[i].style.opacity = '1'
    			}
        } else {
        	var val = 120-count*40;

        	for(var j=count;j<4;j++){
        		if(this.props.nums[j] !== val){
        			this.props.nums[j] = val;
        			//??????????
              // parent.childNodes[j].style.transition = '.5s'
        			parent.childNodes[j].style.transform = 'translateY(0px)'
              parent.childNodes[j].style.background = '#e0e0e0'
              parent.childNodes[j].style.opacity = '0.9'
        		}
        		val -= 40;
        	}
        }

    }

	render(){
		return (
			<div ref='dbs' className="down-beads-container">
				{this.props.nums.map((item, index)=>{

					return <div data-index={index} className="downbead" onClick={this.handledownClick.bind(this)} {...this.props}></div>
				})}
				<div className="down-vertical-pole"></div>
			</div>
		)
	}
}
