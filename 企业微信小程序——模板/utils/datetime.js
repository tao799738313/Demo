const numReg = /\d+/g;

function add0(str){
    str = Number(str);
    return (str<10?'0'+str:str)
}

function date2time(data,flag){

    var str3 = "x/x/x 00:00:00";
    var str4 = "x/x/x x:00:00";
    var str5 = "x/x/x x:x:00";
    var str6 = "x/x/x x:x:x";

    var arr = data.match(numReg);
    var len = arr.length;
    var str = (len==3) && str3 || (len==4) && str4 || (len==5) && str5 || (len==6) && str6;
    arr.forEach(function(x){
        str = str.replace('x',add0(x));
    });
    if(flag){
        return [str,new Date(str).getTime()];
    }else{
        return new Date(str).getTime();
    }

}


function time2date(time,str){
    var time = Number(time);
    if(time){
        var str = str || 'x-x-x x:x:x';
        var A = new Date(time).getFullYear();
        var B = new Date(time).getMonth()+1;
        var C = new Date(time).getDate();
        var D = new Date(time).getHours();
        var E = new Date(time).getMinutes();
        var F = new Date(time).getSeconds();

        var arr = [A,B,C,D,E,F];
        arr.forEach(function(x){
            str = str.replace('x',add0(x))
        });
        return str;
    }else{
        console.log("时间格式不正确")
    }
}

module.exports = {
    time2date,date2time
}