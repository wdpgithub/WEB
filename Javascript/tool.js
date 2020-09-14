//冒泡排序
function bubble(arr){
    for (var i = 0;i<arr3.length-1;  i++) {
        for (var j = 0;j<arr3.length - 1-i;  j++) {
            if(arr3[j]>arr3[j+1]) {
                var temp=arr3[j];
                arr3[j]=arr3[j+1];
                arr3[j+1]=temp;
            };
        };
    };
}
//选择排序
function choose(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if (arr[i]>arr[j]) {
                    var tmp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=tmp;
            }
        }
    }
}

//获取元素节点的函数
function $(vArg){
    //<1>对参数进行区分
    switch(vArg[0]){
        case "#": //id
            return document.getElementById(vArg.substring(1));
            break;
        case "."://className
            return elementByClassName(document,vArg.substring(1));
            break;
        default:
            //对参数的前五个字符,进行判断
            var str = vArg.substring(0,5);
            if (str == "name=") {//name
                return document.getElementsByName(vArg.substring(5));
            }else{//tagName
                return document.getElementsByTagName(vArg);
            }
            break;

        }
}
/*
    通过className获取元素节点
 */
function elementByClassName(parentNode,className){
    //<1>找到parent下所有的元素节点
    var nodes = parentNode.getElementsByTagName('*');
    var result = [];//用记录符合条件的元素节点
    for (var i = 0; i < nodes.length; i++) {
    //<2>如果符合条件,添加到数组中
        if (nodes[i].className==className) {
            result.push(nodes[i]);
        };
    };
    return result;
}
//获取当前样式的兼容函数
function getStyle(elem,attr){
        return elem.currentStyle ? elem.currentStyle[attr] :getComputedStyle(elem)[attr];
}
//删除子节点上的空白节点
 function removeSpaceNode2(parent) {
     var nodes = parent.childNodes;
     for (var i = nodes.length - 1; i >= 0; i--) {
         if (nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)) {
             //是空白节点,删除,通过父节点,删除子节点
             parent.removeChild(nodes[i]);
         }
     };
 }
 //删除空白节点
 function removeSpaceNode(nodes) {
     var result = []; //用来存放不是空白节点的节点的
     for (var i = 0; i < nodes.length; i++) {
         //判断是否是空白节点
         if (nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)) {
             continue;
         };
         result.push(nodes[i]);
     };
     return result;
 }
 //创建一个带文本的节点
 function createNodeWithText(tagName,text){
    //1创建元素节点
    var node = document.createElement(tagName);
    //2.创建文本节点
    var oTxt = document.createTextNode(text);
    //3.将文本节点插入元素节点内
    node.appendChild(oTxt);
    //4.返回于元素节点
    return node;
 }

 //插入到某个节点之后
 function insertAfter(newNode,oldNode){
    var parent = oldNode.parentNode;
    if (parent.lastChild==oldNode) {
        //最后一个节点,插入到末尾
        parent.appendChild(newNode);
    }else{
        //找到下一个节点
        parent.insertBefore(newNode,oldNode.nextSibling);
    }
 }
 //DOM二级事件处理函数
 //添加
 function addEvent(obj,type,fun){
    if (obj.addEventListener) {
        obj.addEventListener(type,fun,false);
    }else{
        obj.attachEvent("on"+type, fun);
    }
}
//移除
function removeEvent(obj,type,fun){
    if (obj.removeEventListener) {
        obj.removeEventListener(type,fun,false);
    }else{
         obj.detachEvent("on"+type, fun);
    }
}
//cookie函数
//得到cookie
 function getCookie(name){
            var str = document.cookie;
            var arr = str.split("; ");
            for(var i = 0; i < arr.length;i++) {
                var arr1 = arr[i].split("=");
                if (arr1[0]==name) {
                    return arr1[1];
                };
            };
        }
//设置cookie
 function setCookie(name,value,day){
            var oDate = new Date();
            oDate.setDate(oDate.getDate()+day);
            document.cookie = name + "=" + value + ";expries" + oDate;
        }
//移除cookie
 function removeCookie(name){
            setCookie(name,"",-1);
        }