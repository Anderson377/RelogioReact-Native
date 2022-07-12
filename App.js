import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date(),
      statusHoras: 'Desativado',
      textoBotao: 'Liga',
    };
    this.timerId = null;
    this.liga = this.liga.bind(this);
  }

  liga() {
    if (this.timerId != null) {
      clearInterval(this.timerId);
      this.timerId = null;
      this.setState({statusHoras: 'desativado', textoBotao: 'Liga'});
    } else {
      this.timerId = setInterval(() => {
        this.setState({data: new Date()});
      }, 1000);
      this.setState({statusHoras: 'Ativado', textoBotao: 'Desligado'});
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 40}}>
          Hora:{this.state.data.toLocaleTimeString()}
        </Text>
        <Text style={{fontSize: 40}}>
          {this.state.data.toLocaleDateString()}
        </Text>
        <Text style={{fontSize: 30}}>{this.state.statusHoras}</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={estilo.botao} onPress={this.liga}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
              {this.state.textoBotao}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  botao: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 30,
    height: 50,
  },
});
