export default class TestSorting {

  static sortItemsByisFinished(objArr) { // zuoberst kommen die nicht erledigten notes zurück!!
    return objArr.sort((a, b) => { // return statement nicht vergessen!!!
      if (!a.isFinished && b.isFinished) {
        return -1;
      } else if (!b.isFinished && a.isFinished) {
        return 1;
      }
      return 0;
    });
  }


  // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
  static compare(a, b) {
    if (a.last_nom < b.last_nom) { return -1; }
    if (a.last_nom > b.last_nom) { return 1; }
    return 0;
  }
  // objs.sort(compare);


  static dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    };
  }
  // People.sort(dynamicSort("Name"));



  /*
  static sortItemsByObjKey(objArr,key){  //braucht obj_key!
      return objArr.sort((a, b) => {   //key ist sehr warscheinlich kein object, daher geht dies nicht!

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


  /*
  static sortItemsByObjKey(objArr, key) { // umbau, damit es keine object keys mehr braucht == ist nicht mehr strict ===
    return objArr.sort((a, b) => { // key ist sehr warscheinlich kein object, daher geht dies nicht!
      // console.log('a: ', a, Object.keys(objArr), a.isFinished, a.key, key);
      // console.log('b: ', b, Object.values(objArr), b.isFinished, b.key, key);

      if ((a.key != key) && (b.key == key)) {
        return -1;
      } else if ((b.key != key) && (a.key == key)) {
        return 1;
      }
      return 0;
    });
  }
  */


  /*
  static sortItemsByImportance(objArr) {
    return objArr.sort((a, b) => { // sortiert mit Nummern noch nicht richtig!!!
      // console.log('a: ',a, a.importance);
      // console.log('b: ',b, b.importance);
      if (!a.importance && b.importance) {
        return -1;
      } else if (!b.importance && a.importance) {
        return 1;
      }
      return 0;
    });
  }

  */


}
