

import {ViewNew} from "./view/ViewNew";
import {Controller} from "./controller/Controller";
import {ControllerList} from "./controller/ControllerList";
import {ViewList} from "./view/ViewList";


function start(){

    const viewnew = new ViewNew();
    const domnew = viewnew.queryAllDomObjects();

    const viewlist = new ViewList();
    const domlist = viewlist.queryAllDomObjects();

    if(domlist) {
        viewlist.generateListView(domlist);
    }

    const controller = new Controller();
    if(domnew){
        controller.registerAllEventListener(domnew);
    }

    const controllerlist = new ControllerList();
    if(domlist){
        controllerlist.registerAllEventListener(domlist);
    }

}

start();