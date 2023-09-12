import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { appStyles,  } from '../../services';

export default ({
    style,
    children,
    isXXLTitle,
    isXLTitle,
    isLargeTitle,
    isMediumTitle,
    isSmallTitle,
    isTinyTitle,
    ...props }) => {
    return (
        <Text
            style={[
                //titles
                isXXLTitle && styles.xxlTitleStyle,
                isXLTitle && styles.xlTitleStyle,
                isLargeTitle && styles.largeTitleStyle,
                isMediumTitle && styles.mediumTitleStyle,
                isSmallTitle && styles.smallTitleStyle,
                isTinyTitle && styles.tinyTitleStyle,
                style,]}
            {...props}
        >
            {children}
        </Text>
    );
}




const styles = StyleSheet.create({
    xxlTitleStyle: {
        ...appStyles.h1
    },
    xlTitleStyle: {
        ...appStyles.h2
    },
    largeTitleStyle: {
        ...appStyles.h3
    },
    mediumTitleStyle: {
        ...appStyles.h4
    },
    smallTitleStyle: {
        ...appStyles.h5
    },
    tinyTitleStyle: {
        ...appStyles.h6,
    }

});

