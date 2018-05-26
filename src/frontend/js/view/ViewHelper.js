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


    static selectimportance(id){
        switch (id) {
            case 1:
                return '<span id="1" class="yellow"></span><span id="2"></span><span id="3"></span><span id="4"></span><span id="5"></span>';
                break;
            case 2:
                return '<span id="1" class="yellow"></span><span id="2" class="yellow"></span><span id="3"></span><span id="4"></span><span id="5"></span>';
                break;
            case 3:
                return '<span id="1" class="yellow"></span><span id="2" class="yellow"></span><span id="3" class="yellow"></span><span id="4"></span><span id="5"></span>';
                break;
            case 4:
                return '<span id="1" class="yellow"></span><span id="2" class="yellow"></span><span id="3" class="yellow"></span><span id="4" class="yellow"></span><span id="5"></span>';
                break;
            case 5:
                return '<span id="1" class="yellow"></span><span id="2" class="yellow"></span><span id="3" class="yellow"></span><span id="4" class="yellow"></span><span id="5" class="yellow"></span>';
                break;
        }
    }



    static markStars (id,lastStar) {
        const totalstars = document.querySelectorAll(`[data-id="${id}"] span`);
        totalstars.forEach((item) => {
            if(item.id<=lastStar){  //getAttribute('id')
                item.classList.add('yellow');
            }else{
                item.classList.remove('yellow');
            }
        });
    }



    static sortItemsByisFinished(obj_arr){  //zuoberst kommen die nicht erledigten notes zurück!!
        return obj_arr.sort((a, b) => {   //return statement nicht vergessen!!!
            if(!a.isFinished && b.isFinished){
                return -1;
            }else if (!b.isFinished && a.isFinished){
                return 1;
            }else{
                return 0;
            }
        });
    }

    static sortItemsByImportance(obj_arr){
        return obj_arr.sort((a, b) => {   //sortiert mit Nummern noch nicht richtig!!!

            //console.log('a: ',a, a.importance);
            //console.log('b: ',b, b.importance);
            if(!a.importance && b.importance){
                return -1;
            }else if (!b.importance && a.importance){
                return 1;
            }else{
                return 0;
            }
        });
    }

    /*
    static sortItemsByObjKey(obj_arr,key){  //braucht obj_key!
        return obj_arr.sort((a, b) => {   //key ist sehr warscheinlich kein object, daher geht dies nicht!

            console.log('a: ',a, key);
            console.log('b: ',b, key);

            if(!a.key && b.key){
                return -1;
            }else if (!b.key && a.key){
                return 1;
            }else{
                return 0;
            }
        });
    }
    */

    static sortItemsByObjKey(obj_arr,key){  //umbau, damit es keine object keys mehr braucht == ist nicht mehr strict ===
        return obj_arr.sort((a, b) => {   //key ist sehr warscheinlich kein object, daher geht dies nicht!

            console.log('a: ',a, Object.keys(obj_arr), a.isFinished, a.key, key);
            console.log('b: ',b, Object.values(obj_arr), b.isFinished, b.key, key);

            if((a.key != key) && (b.key == key)){
                return -1;
            }else if ((b.key != key) && (a.key == key)){
                return 1;
            }else{
                return 0;
            }
        });
    }

    //https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    static compare(a,b) {
        if (a.last_nom < b.last_nom)
            return -1;
        if (a.last_nom > b.last_nom)
            return 1;
        return 0;
    }
    //objs.sort(compare);


    static dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
    //People.sort(dynamicSort("Name"));



}