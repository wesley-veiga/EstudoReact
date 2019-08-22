import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Platform,
    StatusBar,
    ScrollView,
    Image
} from 'react-native';

class Pagina4 extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#E6E6E6" }}>
                <Text>Home/Pagina2/Pagina3/Pagina4</Text>


                <View style={{ flex: 2, backgroundColor: "#585858", paddingTop: 20 }}>
                    <View>
                        <Text style = {{color: "white", textAlign: "center", fontSize: 2033}}>
                            Lista de itens
                            </Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <ScrollView>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => (
                                <TouchableOpacity key={index.toString()} onPress={() => alert(item)} style={{ height: 250, backgroundColor: index % 2 == 0 ? '#FAFAFA' : '#F2F2F2' }}>
                                    <View style={{ flex: 2 }}>
                                        <Image source={require(`../images/imagem${5}.png`)} style={{ flex: 1, width: null, height: null, resizeMode: 'center' }} />
                                    </View>
                                    <View style={{ flex: 1, alignItems: "center", paddingTop: 10 }}>
                                        <Text style={{fontSize: 20}}>Borboletas</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>

        );
    }
}


export default Pagina4;
