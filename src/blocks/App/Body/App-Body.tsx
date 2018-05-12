import { Elem, Tag } from 'bem-react-core';

import './App-Body.css';

export default class AppBody extends Elem<{}, {/* state */}> {
  protected block = 'App';
  protected elem = 'Body';

  protected tag(): Tag {
    return 'article';
  }
}
