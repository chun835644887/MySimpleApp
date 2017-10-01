import React, {Component} from 'react';
import {
    View,
    StatusBar,
    BackHandler,
    Text
} from 'react-native';
import {connect, Provider,} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    addNavigationHelpers,
} from 'react-navigation';
import RootNav from '../router/MyStrackNav';
import store from './store/StoreConfig';
import * as RoutesAction from '../redux/actions/RoutesAction'
import Home from './components/HomeScreen'


class App extends Component {
    componentDidMount = () => {
        console.log(this.props);
    }
    render() {
        return (
            <View style={{flex: 1,}}>
                <StatusBar
                    backgroundColor="#1e88e5"
                    translucent={false}
                />
                <RootNav
                    navigation={
                        addNavigationHelpers({
                            actions: this.props.actions,
                            dispatch: this.props.dispatch,
                            state: this.props.routes,
                        })
                    }
                />
            </View>
        );
    }
}

const AppWithNavigationState = connect(
    state => ({
        routes: state.navReducer
    }),
    (dispatch) => ({
        dispatch,
        actions: bindActionCreators(RoutesAction, dispatch),
    })
)(App);

export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        )
    }
    componentDidMount = () => {
        console.log(this.props);
    }
}
