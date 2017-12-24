import AppDispatcher from '../Dispatcher/dispatcher.js'
import Constant from '../Constants/constants.js';
import { EventEmitter } from 'events';

var CHANGE_EVENT = 'change';
class StoreClass extends EventEmitter {
    emitChange = () => {
        this.emit(CHANGE_EVENT);
    }
};

AppDispatcher.register(function(payload){
    console.log("Payload Data ->", payload);
    return true;
})

const AppStore = new StoreClass();
export default AppStore;