window.onload=function(){
    document.getElementById("id-face").addEventListener("change", function(){       
        onFileChange(this,"face-result","face-empty-result")
    });
    document.getElementById("id-back").addEventListener("change", function(){       
        onFileChange(this,"back-result","back-empty-result")
    });
};

/**
 * 
 * @param {*} fileObj input file元素
 * @param {*} el //选中后用于显示图片的元素ID
 * @param {*} btnel //未选中图片是显示的按钮区域ID
 */
function onFileChange(fileObj,el,btnel){
    var windowURL = window.URL || window.webkitURL;
    var dataURL;
    var imgObj = document.getElementById(el);
    document.getElementById(btnel).style.display="none";
    imgObj.style.display="block";
    if (fileObj && fileObj.files && fileObj.files[0]) {
        dataURL = windowURL.createObjectURL(fileObj.files[0]);
        imgObj.src=dataURL;
    } else {
        dataURL = fileObj.value;
        imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
        imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
    }
}