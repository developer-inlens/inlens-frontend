import { ScaledSheet } from "react-native-size-matters";

export default ScaledSheet.create({
    container: {
        paddingTop: "12@s",
        paddingHorizontal: "4@s",
        flex: 1,
    },
    subContainer: {
        paddingHorizontal: "4@s",
    },
    filterText: {
        flex: 10,
    },
    menu: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "12@s",
    },
    icon: {
        flex: 1,
    },
    filter: {},
    participants: {
        marginTop: "12@s",
    },
    participantsList: {
        marginTop: "12@s",
    },
    photosList: {
        // paddingBottom: Dimensions.get('window').width / 3
    },
    photosHead: {
        paddingHorizontal: "4@s",
    },
    photos: {
        // flex: 1,
        marginVertical: "20@s",
    },
    stickyHeader: {
        height: 50,
        width: "100%",
    },
    stickyHeaderBackground: {
        height: 50,
        width: "100%",
        backgroundColor: "red",
        // display: "none",
    },
    // search
});