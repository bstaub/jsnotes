import {View} from "./view/View";
import {Controller} from "./controller/Controller";


function start(){
    const view = new View();
    const dom = view.queryAllDomObjects();

    const contr = new Controller();
    if(dom){ contr.registerAllEventListener(dom); }
}

start();




