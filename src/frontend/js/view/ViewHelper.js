/* global document */
import Storage from '../client-service/Storage';

export default class ViewHelper {
  static loadStyleSwitcherOnStartpage() {
    document.addEventListener('DOMContentLoaded', () => {
      const homebody = document.getElementsByTagName('body')[0];
      const styleswicher = document.getElementById('dropStyleSwitcher');

      const storage = new Storage('styleKey');
      if (storage.getItemFromLocalStorage()) {
        const styleName = storage.getItemFromLocalStorage();
        homebody.classList.add(styleName);
        if (styleswicher) {
          ViewHelper.changeDropdownByValue(styleswicher, styleName);
        }
      }
    });
  }

  static styleSwitcher() {
    const dropStyleSwitcher = document.getElementById('dropStyleSwitcher');
    const homebody = document.getElementsByTagName('body')[0];
    if (dropStyleSwitcher) {
      dropStyleSwitcher.addEventListener('change', () => {
        const storage = new Storage('styleKey');

        if ((dropStyleSwitcher.value).toString() === 'Style2') {
          homebody.classList.add('Style2');
          storage.saveStyleToLocalStorage('Style2');
        } else {
          homebody.classList.remove('Style2');
          storage.saveStyleToLocalStorage('Style1');
        }
      });
    }
  }

  static changeDropdownByValue(selector, value) {
    const opts = selector.options.length;
    for (let i = 0; i < opts; i++) {
      if (selector.options[i].value == value) {
        selector.options[i].selected = true;
        break;
      }
    }
  }

  static showAlert2Seconds(message, alert, redirect = false) {
    const div = document.createElement('div');
    const note = document.querySelector('.note');
    div.className = alert;
    const alertSuccess = document.createTextNode(message);
    div.appendChild(alertSuccess);
    document.querySelector('.detail').insertBefore(div, note); // https://www.mediaevent.de/javascript/insertbefore.html
    div.style.display = 'block';
    setTimeout(() => {
      div.style.display = 'none';
      div.innerHTML = '';
      (redirect) ? window.location.href = redirect : '';
    }, 2000);
  }

  static wichtigkeitClearAll(stars) {
    stars.forEach((greyicon) => {
      greyicon.classList.remove('yellow');
    });
  }

  static wichtigkeit({ stars, importance }) {
    if (stars && importance) {
      stars.forEach((item, index) => {
        item.addEventListener('click', (e) => {
          ViewHelper.wichtigkeitClearAll(stars);
          importance.options.selectedIndex = index;
          e.target.classList.toggle('yellow');
          for (let i = 0; i < index; i++) {
            stars[i].classList.add('yellow');
          }
        });
      });
    }
  }


  markStars(id, lastStar) {
  // static markStars(id, lastStar) {
    const totalstars = document.querySelectorAll(`[data-id="${id}"] span`);
    totalstars.forEach((item) => {
      if (item.id <= lastStar) { // getAttribute('id')
        item.classList.add('yellow');
      } else {
        item.classList.remove('yellow');
      }
    });
  }

  /*  not used with handlebars, just template string helper */
  static selectimportance(id) {
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
}
