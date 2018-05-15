import { Bem, Block, Tag } from 'bem-react-core';
import * as React from 'react';
import { Fragment } from 'react';

import './PortfolioBalance.css';

export interface IBlockProps {
  balance: object;
}

export default class PortfolioBalance extends Block<IBlockProps, {}> {
  protected block = 'PortfolioBalance';

  protected tag(): Tag {
    return 'table';
  }

  protected content() {
    const balance = this.props.balance;

    return Object.keys(balance).sort().map((name, index) => {
      return (
        <Fragment key={index}>
          <Bem elem="Row" tag="tr">
            <Bem elem="Data" tag="td">
              {name}
            </Bem>
            <Bem elem="Data" tag="td">
              {balance[name].available}
            </Bem>
          </Bem>
        </Fragment>
      );
    });
 }
}
