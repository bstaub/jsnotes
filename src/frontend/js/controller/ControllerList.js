import {Storage} from "../client-service/Storage";
import {ViewHelper} from "../view/ViewHelper";


export class ControllerList{

    registerAllEventListener(dom){
        if(dom.dynamicList){
            dom.dynamicList.addEventListener('click', (e) => {
                //console.log('dynamic list clicked');
                //console.log(e);

                if(e.target.id === "listDelete"){
                    console.log('ListDelete Clicked!');
                }

                if(e.target.id === "listEdit"){
                    console.log('ListEdit Clicked!');
                }

            });
        }


    }


}
