import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';

const Album = ({name,color,isSelected}) => {
    return (
        <View style={[styles(color).card,isSelected&&styles().selected]}>
            <Text style={styles().text}>{name}</Text>
        </View>
    )
}

export default Album

const styles =color=> ScaledSheet.create({
    card: {
        backgroundColor: color,
        padding: '12@s',
        marginRight: '6@s',
        borderRadius: '4@s',
        minWidth: '86@s',
        minHeight:'36@s'
    },
    selected: {
        borderBottomColor: 'white',
        borderBottomWidth:'4@s'
        
    },
    text: {
        fontWeight: '500',
        fontSize: '14@s',
        lineHeight: '16@s',
        letterSpacing: '1.25@s',
        color:'#000'
    }
})
