import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';

handlePress = () => {
    Actions.pagina3();
}

const { width, height } = Dimensions.get('window');

class Pagina4 extends Component {
    state = {
        array: [
            { nome: "Bolsa", value: 1, imagem: require("../images/imagem1.png") },
            { nome: "Flor", value: 2, imagem: require("../images/imagem2.png") },
            { nome: "Flor", value: 3, imagem: require("../images/imagem3.png") },
            { nome: "Usina", value: 4, imagem: require("../images/imagem4.png") },
            { nome: "Borboletas", value: 5, imagem: require("../images/imagem5.png") },
            { nome: "Yin-Yang", value: 6, imagem: require("../images/imagem6.png") },
            { nome: "Alvo", value: 7, imagem: require("../images/imagem7.png") },
            { nome: "Dell", value: 8, imagem: require("../images/imagem8.png") },
            { nome: "Fruta", value: 9, imagem: require("../images/imagem9.png") },
            { nome: "PlayStation", value: 0, imagem: require("../images/imagem0.png") }
        ]
    }

    renderImages = () => {
        return this.state.array.map((item, index) => {
            return (
                <TouchableOpacity key={index.toString()} onPress={() => Actions.pagina5({ gilberto: item })} style={{ height: 250, backgroundColor: index % 2 == 0 ? '#FAFAFA' : '#F2F2F2', width: width }}>
                    <View style={{ flex: 2 }}>
                        <Image source={item.imagem} style={{ flex: 1, width: null, height: null, resizeMode: 'center' }} />
                    </View>
                    <View style={{ flex: 1, alignItems: "center", paddingTop: 10 }}>
                        <Text style={{ fontSize: 20 }}>{item.nome}</Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#E6E6E6" }}>
                <View style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    width: width
                }}>
                    <Text>Home/Pagina2/Pagina3/Pagina4</Text>
                </View>

                <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                        style={{
                            position: 'absolute',
                            top: height * 0.025,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: height
                        }}>
                        {this.renderImages()}
                    </ScrollView>
                </View>
            </View>

        );
    }
}


export default Pagina4;
