/**
 * Created by Administrator on 2017/8/15.
 */
function getObj(id){
    return document.getElementById(id);
}
function getStyle(obj,attr){
    if(document.all){
        return parseInt(obj.currentStyle[attr]);
    }
    else{
        return parseInt(getComputedStyle(obj,false)[attr]);
    }
}
var timer=null;
function moving(obj,speed,end){
    clearInterval(share.timer);
    obj.timer=null;
    obj.timer=setInterval(function(){
        var left_val=getStyle(share,"left");
        if(left_val<end){
            if(left_val<end){
                left_val+=speed;
            }
        }else{
            if(left_val>end){
                left_val+=speed;
            }
        }

        share.style.left=left_val+"px";
    },17)
}