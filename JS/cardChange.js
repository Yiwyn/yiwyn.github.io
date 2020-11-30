$(function (event) {
    var menus = document.getElementsByClassName("menubtn");



    var cards = document.getElementsByClassName("cardClass");


    var slider = $(".slider");



    for (let i = 0; i < menus.length; i++) {
        menus[i].onmouseenter = function () {
            slider.css("left", (8 + i * 120).toString() + "px");
            ChangeCard(i);
        }
    }


    //算法设计错误, 交换位置后 原index 顺序将被打破, 保证按钮绑定一个界面 //已经解决
    function ChangeCard(index) {
        console.log(index);

        tempCards = Array.from(cards);

        var temp = tempCards[index];
        for (let i = index; i > 0; i--) {
            tempCards[i] = tempCards[i - 1];
        }
        tempCards[0] = temp;

        for (let i = 0; i < tempCards.length; i++) {
            if (i == 0) {
                console.log("--------------------");
            }
            tempCards[i].style.zIndex = (0 - i).toString();
            tempCards[i].style.top = (i * 0.5).toString() + "rem";
            tempCards[i].style.left = (i * 0.5).toString() + "rem";

        }

        for (let i = 0; i < tempCards.length; i++) {
            console.log(tempCards[i]);
        }
    }



})
