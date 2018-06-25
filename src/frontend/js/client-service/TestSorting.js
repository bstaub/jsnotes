// this class is not used in this project, just for Testing purpose!
export default class TestSorting {
  static sortItemsByisFinished(objArr) {
    return objArr.sort((a, b) => { // need return statement!
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
  // obj.sort(dynamicSort("Name"));
}
