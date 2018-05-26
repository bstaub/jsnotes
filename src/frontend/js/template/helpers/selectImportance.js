module.exports = function(importance) {
    switch (parseInt(importance)) {
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
};