import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainWindow from "./MainWindow";
import Kardex from "./Kardex";

export default class Drawer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Draw = createDrawerNavigator();
        return (
            <Draw.Navigator>
                <Draw.Screen
                    name="Datos"
                    component={MainWindow}
                    initialParams={{ codigo: this.props.route.params.codigo, password: this.props.route.params.password }}
                />
                <Draw.Screen
                    name="Horario"
                    component={Kardex}
                    initialParams={{ codigo: this.props.route.params.codigo, password: this.props.route.params.password }}
                />
            </Draw.Navigator>
        );
    }
}
