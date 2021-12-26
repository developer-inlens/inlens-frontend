import { ActionTypes } from "../actionTypes";
import { AsyncStorage } from '@react-native-async-storage/async-storage';
export const sendPhoneNumber = (data) => async(dispatch) => {
    try {
        console.log("hii")
        dispatch({ type: ActionTypes.SEND_PHONE_NUMBER_LOADING });
        // const res = await axios("admin").post("/admin/fetchdata", data);
        await AsyncStorage.setItem(
      'auth-token',
      'my-token'
    );
        dispatch({ type: ActionTypes.PHONE_NUMBER_SENT});
    } catch (err) {
        dispatch({
            type: ActionTypes.ERROR,
            payload: err,
        });
    }
};