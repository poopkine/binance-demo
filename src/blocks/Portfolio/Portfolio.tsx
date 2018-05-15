import { Bem, Block } from 'bem-react-core';
import * as React from 'react';
import { Fragment } from 'react';

import PortfolioBalance from '../PortfolioBalance/PortfolioBalance';
import PortfolioGraph from '../PortfolioGraph/PortfolioGraph';
import PortfolioHistory from '../PortfolioHistory/PortfolioHistory';

import './Portfolio.css';

// import IBalance from '../../interfaces/IBalance/IBalance';
interface IBalance {
  [token: string]: {
    available: string;
    onOrder: string;
  };
}

interface IBlockProps {
  balance: IBalance;
}

export default class Portfolio extends Block<IBlockProps, {}> {
  protected block = 'Portfolio';

  protected content() {
    return (
      <Fragment>
        <Bem elem="Data" mix="Portfolio-Data_side">
          <PortfolioBalance balance={this.props.balance}/>
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
