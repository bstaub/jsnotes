import 'font-awesome/scss/font-awesome.scss';
import ViewNew from './view/ViewNew';
import Controller from './controller/Controller';
import ControllerList from './controller/ControllerList';
import ViewList from './view/ViewList';
import Storage from "./client-service/Storage";
import ViewHelper from "./view/ViewHelper";

window.onload = function(){
    const homebody = document.getElementsByTagName('body')[0];
    const styleswicher = document.getElementById('dropStyleSwitcher');

    const storage = new Storage('styleKey');
    if(storage.getItemFromLocalStorage()){
        let styleName = storage.getItemFromLocalStorage();
        homebody.classList.add(styleName);
        if(styleswicher){
            ViewHelper.changeDropdownByValue(styleswicher,styleName);
        }

    };

}

function start() {
  const domnew = ViewNew.queryAllDomObjects();
  const domlist = ViewList.queryAllDomObjects();

  if (domlist) {
    const viewlist = new ViewList();
    viewlist.generateListView(domlist);
  }

  const controller = new Controller();
  if (domnew) {
    controller.registerAllEventListener(domnew);
  }

  const controllerlist = new ControllerList();
  if (domlist) {
    controllerlist.registerAllEventListener(domlist);
  }
}

start();
