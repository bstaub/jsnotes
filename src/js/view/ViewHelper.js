export class ViewHelper{
    constructor() {
        console.log(StaticMethodCall.staticMethod());
    }

    static staticMethod() {
        return 'static method has been called.';
    }

    static checkDomNoNullValueExist(dom){
        if(Object.values(dom).indexOf(null) == -1) {
            return true;
        }
    }
}