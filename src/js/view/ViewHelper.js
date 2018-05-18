import {Storage} from "../client-service/Storage";

export class ViewHelper{
    constructor() {
        console.log(StaticMethodCall.staticMethod());
    }

    static staticMethod() {
        return 'static method has been called.';
    }

    static checkDomNoNullValueExist(dom){
        if(Object.values(dom).indexOf(null) == -1) {
            return true;
        }
    }

    static wichtigkeitClearAll(stars){
        stars.forEach((greyicon) => {
            greyicon.classList.remove("yellow");
        });
    }

    static wichtigkeit({stars,importance}){
        if(stars && importance){
            stars.forEach((item, index) => {
                item.addEventListener('click', (e) => {
                    ViewHelper.wichtigkeitClearAll(stars);
                    importance.options.selectedIndex = index;
                    e.target.classList.toggle("yellow");
                    for (var i = 0; i < index; i++) {
                        stars[i].classList.add("yellow");
                    }
                });
            });
        }
    }

    static styleSwitcher(){
        const dropStyleSwitcher = document.getElementById('dropStyleSwitcher');
        const homebody = document.getElementsByTagName('body')[0];
        if(dropStyleSwitcher){
            dropStyleSwitcher.addEventListener('change', () => {
                //((dropStyleSwitcher.value).toString() === "styleWhite") ? homebody.classList.add("style2") : homebody.classList.remove("style2");

                const storage = new Storage('styleKey');

                if((dropStyleSwitcher.value).toString() === 'styleWhite'){
                    homebody.classList.add('style2');
                    storage.saveStyleToLocalStorage('style2');
                }else{
                    homebody.classList.remove('style2');
                    storage.saveStyleToLocalStorage('default');
                }

            });
        }

    }

    static showAlert3Seconds(message, alert) {
        //Create DOM Element for Alert Message
        const div = document.createElement('div');
        const note = document.querySelector('.note');
        div.className = alert;
        const alertSuccess = document.createTextNode(message);
        div.appendChild(alertSuccess);
        document.querySelector('.detail').insertBefore(div, note);  //https://www.mediaevent.de/javascript/insertbefore.html
        div.style.display = 'block'; //show div again
        setTimeout(() => {
            div.style.display = 'none';
            div.innerHTML = '';
        }, 3000);
    }
}