import 'font-awesome/scss/font-awesome.scss';
import ViewNew from './view/ViewNew';
import Controller from './controller/Controller';
import ControllerList from './controller/ControllerList';
import ViewList from './view/ViewList';
import ViewHelper from './view/ViewHelper';
import Storage from './client-service/Storage';
import Note from './model/Note';


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
    const controller = new Controller(new Storage('notesKey'));
    controller.registerAllEventListener(domnew);
  }

  const controllerlist = new ControllerList();
  if (domlist) {
    controllerlist.registerAllEventListener(domlist);
  }
}

start();
