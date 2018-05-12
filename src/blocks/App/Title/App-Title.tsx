import { Elem, Tag } from 'bem-react-core';

import './App-Title.css';

export default class AppTitle extends Elem<{}, {/* state */}> {
  protected block = 'App';
  protected elem = 'Title';

  protected tag(): Tag {
    return 'h1';
  }
}
