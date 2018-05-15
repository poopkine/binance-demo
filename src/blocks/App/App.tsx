import { Block } from 'bem-react-core';
import * as React from 'react';
import { Fragment } from 'react';

import Binance from '../Binance/Binance';
import Portfolio from '../Portfolio/Portfolio';

import './App.css';
import AppBody from './Body/App-Body';
import AppFoot from './Foot/App-Foot';
import AppHead from './Head/App-Head';

// import IBalance from '../../interfaces/IBalance/IBalance';
interface IBalance {
  [token: string]: {
    available: string;
    onOrder: string;
  };
}

export interface IAppProps {
  path: string;
}

export interface IAppState {
  title: string;
  balance: IBalance;
}

export default class App extends Block<IAppProps, IAppState> {
  protected block = 'App';
  private binance = new Binance();

  constructor(props: IAppProps) {
    super(props);

    this.state = {
      title: 'Initializing',
      balance: {}
    };
  }

  public componentDidMount() {
    this.setState({
      title: 'Binance Demo'
    });

    this.updateData();
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

  private updateData() {
    const that = this;

    setInterval(function() {
      that.binance.getBalance(function(balance: IBalance) {
        that.setState({balance});
      });
    }, 2000);
  }
}
