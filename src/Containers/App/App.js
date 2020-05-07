import React from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import Inicio from '../Inicio/Inicio';
import Creacion from '../Creacion/Creacion';
import Coleccion from '../Coleccion/Coleccion';
import Context from '../../Utils/context';

function App() {

  const [character, setCharacter ] = React.useState({
    name: '',
    color: '#383838',
    ears: 1,
    eyes: 1,
    mouth: 1,
    size: '32',
    id: ''
  });


  const [ list, setList ] = React.useState([]);
  
  //Local storage
  React.useEffect(() => {
    const listString = localStorage.getItem('list');
    if(listString !== null){
      setList(JSON.parse(listString));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [ list ]);

  //Agregar Personaje al arreglo
  const handleSave = () => {
    const newCharacter = {
        name: character.name,
        color: character.color,
        ears: character.ears,
        eyes: character.eyes,
        mouth: character.mouth,
        size: character.size,
        id: character.id
    }

    setCharacter({
      name: '',
      color: '#383838',
      ears: 1,
      eyes: 1,
      mouth: 1,
      size: '32',
      id:''
    });

    const index = list.findIndex((elem) => {
      return elem.id === newCharacter.id;
    });

    if(index===-1){

      setList([
        ...list,
          newCharacter
      ]);

    }else{

      setList([
        ...list.slice(0, index),
        newCharacter,
        ...list.slice(index+1)
      ])

    }
  
  }

  const handleClear = () => {
    setList([]);
  }

  const handleCharacterDelete = (id) => {
      
      const index = list.findIndex((elem) => {
        return elem.id === id;
      });
      setList([
        ...list.slice(0, index),
        ...list.slice(index + 1),
      ]);
    }

    const handleCharacterEdit = (id) => {
      
      const index = list.findIndex((elem) => {
        return elem.id === id;
      });
      const character = list[index];
      setCharacter({
        name: character.name,
        color: character.color,
        ears: character.ears,
        eyes: character.eyes,
        mouth: character.mouth,
        size: character.size,
        id: character.id
      });

      
      
    }

  //Valor del contexto
  const context = {
    character:character,
    setCharacter:setCharacter,
    list:list,
    setList: setList,
    handleSave: handleSave,
    handleClear: handleClear,
    handleCharacterDelete:handleCharacterDelete,
    handleCharacterEdit:handleCharacterEdit
  }




  return (
    <div className="App">
     
     <Router>
      <Context.Provider value={context}>

      <video autoPlay loop className="grano" preload="auto" volume="0">
      <source src="/videos/Grain.mp4" type="video/mp4" />
    </video>


        <Route path="/" exact component={Inicio} />
        <Route path="/creacion/:id?" exact component={Creacion} />
        <Route path="/coleccion" exact component={Coleccion} />
      
      </Context.Provider>
     </Router>
     
    </div>
  );
}

export default App;
