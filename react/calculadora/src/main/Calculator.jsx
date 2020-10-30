import React, { Component } from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
};

export default class Calculator extends Component {
    state = {
        ...initialState,
    };

    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        this.setState({ ...initialState });
    }

    calc(values, operation) {
        let a = values[0];
        let b = values[1];
        let res = 0;
        switch (operation) {
            case '+':
                res = a + b;
                break;
            case '-':
                res = a - b;
                break;
            case '*':
                res = a * b;
                break;
            case '/':
                res = a / b;
                break;

            default:
                console.log('Operation is not in the calculator');
                break;
        }
        return res;
    }

    setOperation(operation) {
        /***
         * O current é o que controla a posição de escrita na calculadora
         * se é primeira que foi escrita.
         * Então a operação será setada, deixando de ser null.
         * current é alterada por chave valor
         * e clear display recebe true, assim que o numero for digitado ele limpa o display
         */
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true });
        } else {
            const equals = operation === '=';
            const currentOperation = this.state.operation;

            const currentValues = [...this.state.values];
            try {
                currentValues[0] = this.calc(currentValues, currentOperation);
            } catch (e) {
                currentValues[0] = this.state.values[0];
            }

            currentValues[1] = 0;

            this.setState({
                displayValue: currentValues[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values: currentValues,
            });
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return;
        }

        const clearDisplay =
            this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const newDisplayValue = currentValue + n;
        // fazendo copia por chave e valor no display value
        this.setState({ displayValue: newDisplayValue, clearDisplay: false });

        // Apesar de ficar mais enxuta a sintaxe, eu estou preferindo alterar o nome das propriedades
        // em relacao das constantes criadas
        // o motivo é bem simples
        // fica mais explicito para consulta posterior
        // facil compreenção sem consultar os videos
        if (n !== '.') {
            // essa constante i armazenda o estado atual. 0 para o primeiro elemento do vetor values e 1 para o segundo
            const i = this.state.current;
            // esta constante newValue armazena o valor atual no display, já adicionado o numeros
            const newValue = parseFloat(newDisplayValue);
            // aqui é feita uma cópia do vetor values
            const newValues = [...this.state.values];
            // aqui é armazenado o valor no display na posicao correta do vetor
            newValues[i] = newValue;
            // mais um copia por chave valor para ficar explicito
            this.setState({ values: newValues });
            console.log('No state');
            console.log(this.state);
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}></Display>
                <Button label="AC" click={this.clearMemory} triple></Button>
                <Button label="/" click={this.setOperation} operation></Button>
                <Button label="7" click={this.addDigit}></Button>
                <Button label="8" click={this.addDigit}></Button>
                <Button label="9" click={this.addDigit}></Button>
                <Button label="*" click={this.setOperation} operation></Button>
                <Button label="4" click={this.addDigit}></Button>
                <Button label="5" click={this.addDigit}></Button>
                <Button label="6" click={this.addDigit}></Button>
                <Button label="-" click={this.setOperation} operation></Button>
                <Button label="1" click={this.addDigit}></Button>
                <Button label="2" click={this.addDigit}></Button>
                <Button label="3" click={this.addDigit}></Button>
                <Button label="+" click={this.setOperation} operation></Button>
                <Button label="0" click={this.addDigit} double></Button>
                <Button label="." click={this.addDigit}></Button>
                <Button label="=" click={this.setOperation} operation></Button>
            </div>
        );
    }
}
