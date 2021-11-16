function deviceDetection(){
    let isMobile;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        isMobile = true;
        return isMobile;
    }else{
        isMobile = false;
        return isMobile;
    }
}
export {deviceDetection}