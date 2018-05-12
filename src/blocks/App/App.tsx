import { Block, withMods } from 'bem-react-core';
import * as React from 'react';
import { Fragment } from 'react';

import mod1, { IExampleMod1Props } from '../Example/_mod1/Example_mod1';
import mod2, { IExampleMod2Props } from '../Example/_mod2/Example_mod2';
import Example from '../Example/Example';

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

const ExampleWithMods = withMods<IExampleMod1Props, IExampleMod2Props>(Example, mod1, mod2);

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
          <ExampleWithMods mod1/>
          <ExampleWithMods mod2/>
        </Body>
        <Foot/>
      </Fragment>
    );
  }
}
