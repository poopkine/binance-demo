import { Elem, Tag } from 'bem-react-core';
import * as React from 'react';
import { Fragment } from 'react';

import Logo from '../Logo/App-Logo';
import Title from '../Title/App-Title';
import './App-Head.css';

export interface IElemProps {
  title: string;
}

export default class AppHead extends Elem<IElemProps, {/* state */}> {
  protected block = 'App';
  protected elem = 'Head';

  protected tag(): Tag {
    return 'header';
  }

  protected content() {
    return (
      <Fragment>
        <Logo/>
        <Title>{this.props.title}</Title>
      </Fragment>
    );
  }
}
