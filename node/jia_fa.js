function sum(a, b) {
    return a+b;
}

function minus(a, b) {
    return a-b;

}
exports.formattime=function (data){
    const shi_jian=parseInt(Date.now()/1000,10)-data;
    if (shi_jian<600){
        return '十分钟刚刚';
    } else if (shi_jian<3600){
        return '1小时内';
    }else if (shi_jian<3600*3){
        return '3小时内';
    }else if (shi_jian<3600*24){
        return '24小时内';
    }else if (shi_jian<3600*24*2){
        return '2天前';
    }
    return new Data(data*1000).toString();
}
module.exports.sum = sum;
module.exports.minus = minus;