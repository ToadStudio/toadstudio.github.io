function isPrime(v) {//判断是否为质数
    var s = Math.floor(Math.sqrt(v));
    for (var i = s; i > 1; i--) if (v % i == 0) return false;
    return true;
}

function getPrime(min, max) {//获取指定范围内的质数集合
    if (min > max) { var t = max; max = min; min = t;}
    var rst = [];
    for (var i = Math.max(2, min) ; i <= max; i++) if (isPrime(i)) rst.push(i);
    var len = rst.length;
    return rst[randBoth(0,len - 1)];
}
function randBoth(Min,Max){
      var Range = Max - Min;
      var Rand = Math.random();
      var num = Min + Math.round(Rand * Range); //四舍五入
      return num;
}
