import { BLOCK } from '../constants/tokens';

class Block {
  constructor( statements ) {
    this.token = BLOCK;
    this.statements = statements;
  }

  toString() {
    return this.token + '[\n' + this.statements.join(',\n') + '\n]\n';
  }

  toJS() {
    return this.statements.map( stmt => stmt.toJS() ).join('\n') + '\n';
  }
}

export default function creator( statements ) {
  return new Block( statements );
}
