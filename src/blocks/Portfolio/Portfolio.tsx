import { Bem, Block } from 'bem-react-core';
import * as React from 'react';
import { Fragment } from 'react';

import PortfolioBalance from '../PortfolioBalance/PortfolioBalance';
import PortfolioGraph from '../PortfolioGraph/PortfolioGraph';
import PortfolioHistory from '../PortfolioHistory/PortfolioHistory';

import './Portfolio.css';

export default class Portfolio<P> extends Block<P, {}> {
  protected block = 'Portfolio';

  protected content() {
    return (
      <Fragment>
        <Bem elem="Data" mix="Portfolio-Data_side">
            <PortfolioBalance/>
        </Bem>
        <Bem elem="Data">
            <PortfolioHistory/>
        </Bem>
        <Bem elem="Data">
            <PortfolioGraph/>
        </Bem>
      </Fragment>
    );
  }
}
