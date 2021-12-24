import { ActionTypes } from "../actionTypes";

const homeData = [{
        id: 1,
        album: "Goa trip",
        color: "#EF9A9A",
        participants: [{
                id: 1,
                name: "John",
                photo: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
            },
            {
                id: 2,
                name: "Doe",
                photo: "",
            },
        ],
        photos: [{
                id: 1,
                url: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
            },
            {
                id: 2,
                url: "photo_url",
            },
        ],
    },
    {
        id: 2,
        album: "Us trip",
        color: "#EF9A9A",
    },
    {
        id: 3,
        album: "Uk trip",
        color: "#EF9A9A",
    },
    {
        id: 4,
        album: "Iv to Tvm",
        color: "#EF9A9A",
    },
];

export const fetchHomeData = () => async(dispatch) => {
    try {
        dispatch({ type: ActionTypes.HOME_DATA_LOADING });
        // const res = await axios("admin").post("/admin/fetchdata", data);
        dispatch({ type: ActionTypes.HOME_DATA_LOADED, payload: homeData });
    } catch (err) {
        dispatch({
            type: ActionTypes.ERROR,
            payload: err,
        });
    }
};