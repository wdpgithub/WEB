/*
* @Author: Marte
* @Date:   2018-07-13 20:31:11
* @Last Modified by:   Marte
* @Last Modified time: 2018-07-14 22:37:39
*/

'use strict';
//兼容IE8以下的浏览器
function getStyle(el,property){
    if (getComputedStyle) {
        return getComputedStyle(el)[property];
    }else{
        return el.currentStyle[property];
    }
}

function animate(el,properties){
    clearInterval(el.timer);
    el.timer = setInterval(function(){

        for(var property in properties){
            var current;
            var target = properties[property];

            if(property === 'opacity'){
                current = Math.round(parseFloat(getStyle(el,'opacity'))*100);
            }else{
                current = parseInt(getStyle(el, property));
            }

            var speed = (target - current)/ 30;
            speed = speed > 0?Math.ceil(speed) : Math.floor(speed);
            if(property === 'opacity'){
                el.style.opacity = (current + speed) /100;
            }else{
                el.style[property] = current + speed + 'px';
            }
        }
    },20)

}