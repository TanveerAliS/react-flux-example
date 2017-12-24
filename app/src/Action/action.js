import AppDispatcher from '../Dispatcher/dispatcher.js';
import Constant from '../Constants/constants.js';

export default {
    addItem : (item) => {
        AppDispatcher.handleViewAction({
            actionType: Constant.ADD_ITEM,
            item:item
        })
    }
}
