import { Block } from 'bem-react-core';
import * as React from 'react';
import { Fragment } from 'react';

import Portfolio from '../Portfolio/Portfolio';

import './App.css';
import Body from './Body/App-Body';
import Foot from './Foot/App-Foot';
import Head from './Head/App-Head';

export interface IAppProps {
  path: string;
}

export interface IAppState {
  title: string;
}

export default class App extends Block<IAppProps, IAppState> {
  protected block = 'App';

  constructor(props: IAppProps) {
    super(props);

    this.state = {
      title: 'Initializing'
    };
  }

  public componentDidMount() {
    this.setState({ title: 'Binance Demo' });
  }

  protected content() {
    return (
      <Fragment>
        <Head title={this.state.title}/>
        <Body>
          <Portfolio/>
        </Body>
        <Foot/>
      </Fragment>
    );
  }
}
