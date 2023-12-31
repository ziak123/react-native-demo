import {colors}  from "../utilities/colors"
import  {appStyles}  from "../utilities/appStyles"

export const routes={
    auth:'auth',
    app:'app',
    splash:'splash',
    signin:'signin',
    mapscreen:'mapscreen',
    product:'product',
    userlist:'userlist'
}
export const headers = {
    screenOptions: {
         // headerShown: false,
         title: 'Title',
         headerTitleAlign: 'left',
         headerStyle: [appStyles.headerStyle],
         headerTitleStyle: appStyles.headerTitleStyle,
         headerTintColor: colors.appTextColor4,
         headerBackTitle: ' '

    }
}
export const tabs = {
    tabBarOptions: {
        showLabel: false,
        tabBarActiveTintColor: colors.appColor1,
        tabBarInactiveTintColor: colors.appBgColor3,
        allowFontScaling: true,
        tabBarStyle: appStyles.tabBarStyle,
        activeBackgroundColor: '#FFFFFF40',
        tabStyle: { borderRadius: 20, marginHorizontal: 7.5, marginVertical: 2 }
    },
}