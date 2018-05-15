import { Block } from 'bem-react-core';
import * as React from 'react';
import { Fragment } from 'react';

import Portfolio from '../Portfolio/Portfolio';

import './App.css';
import AppBody from './Body/App-Body';
import AppFoot from './Foot/App-Foot';
import AppHead from './Head/App-Head';

export interface IAppProps {
  path: string;
}

export interface IAppState {
  title: string;
  balance: object;
}

export default class App extends Block<IAppProps, IAppState> {
  protected block = 'App';

  constructor(props: IAppProps) {
    super(props);

    this.state = {
      title: 'Initializing',
      balance: {}
    };
  }

  public componentDidMount() {
    const data = this.getBinanceData();

    this.setState({
      title: 'Binance Demo',
      balance: data.balance
    });
  }

  protected content() {
    return (
      <Fragment>
        <AppHead title={this.state.title}/>
        <AppBody>
          <Portfolio balance={this.state.balance}/>
        </AppBody>
        <AppFoot/>
      </Fragment>
    );
  }

  private getBinanceData() {
    const balance = {
      BTC: { available: '0.00000000', onOrder: '0.00000000' },
      ETH: { available: '0.01929634', onOrder: '0.00000000' },
      BNB: { available: '0.99813163', onOrder: '0.00000000' }
    };

    return {
      balance: this.removeEmptyFromBalance(balance)
    };
  }

  private removeEmptyFromBalance(balance) {
    return Object.keys(balance).reduce((acc, item) => {
      if (parseFloat(balance[item].available) > 0) {
        acc[item] = balance[item];
      }

      return acc;
    }, {});
  }
}
