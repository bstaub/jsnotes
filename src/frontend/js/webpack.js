import 'font-awesome/scss/font-awesome.scss';
import ViewNew from './view/ViewNew';
import Controller from './controller/Controller';
import ControllerList from './controller/ControllerList';
import ViewList from './view/ViewList';
import ViewHelper from './view/ViewHelper';
import Storage from './client-service/Storage';
import HttpService from './client-service/HttpService';


function start() {
  const domnew = ViewNew.queryAllDomObjects();
  const domlist = ViewList.queryAllDomObjects();
  ViewHelper.loadStyleSwitcherOnStartpage();

  if (domlist) {
    const viewlist = new ViewList();
    viewlist.generateListView(domlist);
  }


  //const controller = new Controller();
  if (domnew) {
    //const controller = new Controller(new Storage('notesKey'));
    const controller = new Controller(new HttpService());
    controller.registerAllEventListener(domnew);
  }

  const controllerlist = new ControllerList(new Storage('notesKey'));
  if (domlist) {
    controllerlist.registerAllEventListener(domlist);
  }
}

start();
