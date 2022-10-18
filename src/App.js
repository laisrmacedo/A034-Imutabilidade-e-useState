import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 1
  })

  function pokemonOnClick(){
    setPokemon({...pokemon, 
      name: "Pikachu",
      weight: 6,
      image: 'https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png'
    })
  }

  //========================================
  const [pokemon2, setPokemon2] = useState({
    name: "Abra",
    type: "Psychic",
    evolved: false,
    weight: 19.5,
    color: 'Brown',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/6/62/063Abra.png/250px-063Abra.png',
    id: 2
  })

  function pokemon2OnClick(){
    setPokemon2({...pokemon2, 
      name: "Kadabra",
      weight: 56.5,
      image: 'https://archives.bulbagarden.net/media/upload/thumb/9/97/064Kadabra.png/250px-064Kadabra.png'
    })
  }

  //========================================
  const [pokemon3, setPokemon3] = useState({
    name: "Arbok",
    type: "Poison",
    evolved: false,
    weight: 65,
    color: 'Purple',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/c/cd/024Arbok.png/250px-024Arbok.png',
    id: 3
  })

  function pokemon3OnClick(){
    setPokemon3({...pokemon2, 
      name: "Ekans",
      weight: 6.9,
      image: 'https://archives.bulbagarden.net/media/upload/thumb/f/fa/023Ekans.png/250px-023Ekans.png'
    })
  }

  //========================================
  const [pokemon4, setPokemon4] = useState({
    name: "Dratini",
    type: "Dragon",
    evolved: false,
    weight: 3.3,
    color: 'Blue',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/c/cc/147Dratini.png/250px-147Dratini.png',
    id: 4
  })

  function pokemon4OnClick(){
    setPokemon4({...pokemon2, 
      name: "Dragonair",
      weight: 16.5,
      image: 'https://archives.bulbagarden.net/media/upload/thumb/9/93/148Dragonair.png/250px-148Dragonair.png'
    })
  }
  
  // Para fazer seus próximos pokemons, crie novos estados!
  return ( 
  <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard {...pokemon} click={pokemonOnClick}/>
      <PokemonCard {...pokemon2} click={pokemon2OnClick}/>
      <PokemonCard {...pokemon3} click={pokemon3OnClick}/>
      <PokemonCard {...pokemon4} click={pokemon4OnClick}/>
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );

}

export default App;
