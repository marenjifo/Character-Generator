import React from 'react';

const Context = React.createContext({
  character: {
    name: '',
    color: '#383838',
    ears: 1,
    eyes: 1,
    mouth: 1,
    size: '32',
    id: ''
  },
  setCharacter: () => null,
  list: [],
  setList: () => null,
  handleSave: () => null,
  handleClear: () => null,
  handleCharacterDelete: () => null,
  handleCharacterEdit: () => null
});

export default Context;