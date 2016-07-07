/**
 * 
 */
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
        //window.location.href="http://blog.csdn.net/leafact";
		window.open("http://blog.csdn.net/leafact");
    } else {
        //window.location.href="http://m.blog.csdn.net/blog/index?username=leafact";
		window.open("http://m.blog.csdn.net/blog/index?username=leafact");
    }
}

function browserZhangHaoGuanJiaRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
        //window.location.href="http://android.myapp.com/myapp/detail.htm?apkName=com.leafact.helppwd";
		window.open("http://android.myapp.com/myapp/detail.htm?apkName=com.leafact.helppwd");
    } else {
        //window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.leafact.helppwd";
		window.open("http://a.app.qq.com/o/simple.jsp?pkgname=com.leafact.helppwd");
		
    }
}