import React from 'react'
import axios from 'axios';
import { motion } from 'framer-motion'
import PokeEntry from './components/PokeEntry';


function App() {
  const [pokemon, setPokemon] = React.useState("1")
  const [pokemonData, setPokemonData] = React.useState([])
  const [pokemonType, setPokemonType] = React.useState([])
  const [pokemonMoves, setPokemonMoves] = React.useState([])
  const [pokemonAbilities, setPokemonAbilities] = React.useState([])
  const [tempPoke, setTempPoke] = React.useState("")
  const [wiki, setWiki] = React.useState("https://pokemon.fandom.com/wiki/Bulbasaur")
  const [color1, setColor1] = React.useState('green')
  const [color2, setColor2] = React.useState('#C930FF')

  React.useEffect(() => {
    const getPokemon = async () => {
      const toArray = [];
      let pokeTypeArr = [];
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const res = await axios.get(url)
        toArray.push(res.data)
        pokeTypeArr = (res.data.types.map((item, index) => (
          (index ? '-' : '') + item.type.name
        )))
        setPokemonType(res.data.types.map((item, index) => (
          (index ? '-' : '') + item.type.name
        )))
        setPokemonMoves(res.data.moves.map((item, index) => (
          (index ? ', ' : '') + item.move.name
        )))
        setPokemonAbilities(res.data.abilities.map((item, index) => (
          (index ? ', ' : '') + item.ability.name
        )))
        setPokemonData(toArray)
        setBackground(pokeTypeArr[0], pokeTypeArr[1])
        setWiki(`https://pokemon.fandom.com/wiki/${res.data.name}`)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
    getPokemon()
    
  },[pokemon])

  const handleChange = (e) => {
    setTempPoke(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemon(tempPoke)
  }

  const nextPokemon = () => {
    setPokemon(pokemonData[0].id + 1)
  }

  const prevPokemon = () => {
    if (pokemonData[0].id > 1) {
      setPokemon(pokemonData[0].id - 1)
    }
    else {
      return
    }
  }

  const setBackground = (pokeType, secondPokeType) => {
    switch (pokeType) {
      case 'water':
        setColor1('#34CAFF');
        break;
      case 'fire':
        setColor1('#FF6E00');
        break;
      case 'grass':
        setColor1('green');
        break;
      case 'electric':
        setColor1('#F7D02C');
        break;
      case 'normal':
        setColor1('#A8A77A');
        break;
      case 'ice':
        setColor1('#92FFF0');
        break;
      case 'fighting':
        setColor1('#FF2C2C');
        break;
      case 'poison':
        setColor1('#C930FF');
        break;
      case 'ground':
        setColor1('#FFD28C');
        break;
      case 'flying':
        setColor1('#A98FF3');
        break;
      case 'psychic':
        setColor1('#F95587');
        break;
      case 'bug':
        setColor1('#9CFF00');
        break;
      case 'rock':
        setColor1('#FFB33D');
        break;
      case 'ghost':
        setColor1('#735797');
        break;
      case 'dark':
        setColor1('#443D25');
        break;
      case 'dragon':
        setColor1('#6237FF');
        break;
      case 'steel':
        setColor1('#D3D3D3');
        break;
        case 'fairy':
          setColor1('pink');
          break;
      default:
        setColor1('black');
    }

    switch (secondPokeType) {
      case '-water':
        setColor2('#34CAFF');
        break;
      case '-fire':
        setColor2('#FF6E00');
        break;
      case '-grass':
        setColor2('green');
        break;
      case '-electric':
        setColor2('#F7D02C');
        break;
      case '-normal':
        setColor2('#A8A77A');
        break;
      case '-ice':
        setColor2('#92FFF0');
        break;
      case '-fighting':
        setColor2('#FF2C2C');
        break;
      case '-poison':
        setColor2('#C930FF');
        break;
      case '-ground':
        setColor2('#FFD28C');
        break;
      case '-flying':
        setColor2('#A98FF3');
        break;
      case '-psychic':
        setColor2('#F95587');
        break;
      case '-bug':
        setColor2('#9CFF00');
        break;
      case '-rock':
        setColor2('#FFB33D');
        break;
      case '-ghost':
        setColor2('#735797');
        break;
      case '-dark':
        setColor2('#443D25');
        break;
      case '-dragon':
        setColor2('#6237FF');
        break;
      case '-steel':
        setColor2('#D3D3D3');
        break;
      case '-fairy':
        setColor2('pink');
        break;
      default:
        setColor2('gray');
    }
  }

  const pokeEntries = pokemonData.map((data) => {
    return (
      <PokeEntry
        key={data.id}
        sprites={data.sprites}
        name={data.name}
        id={data.id}
        type={pokemonType}
        abilities={pokemonAbilities}
        height={data.height}
        weight={data.weight}
        moves={pokemonMoves}
        nextPokemon={nextPokemon}
        prevPokemon={prevPokemon}
        wiki={wiki}
        color1={color1}
        color2={color2}
        hp={data.stats[0].base_stat}
        atk={data.stats[1].base_stat}
        def={data.stats[2].base_stat}
        spAtk={data.stats[3].base_stat}
        spDef={data.stats[4].base_stat}
        spd={data.stats[5].base_stat}
      />
    )
  })

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <label className="input-container">
          <a href="https://pokeapi.co/">
            <motion.img
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.2 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              className="pokeball-icon" src={require("./images/pokeball.png")} alt="pokeball icon" />
          </a>
          <motion.input
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            type="text" onChange={handleChange} placeholder="Enter Pokemon" />
        </label>
      </form>
      {pokeEntries}
      <div className="footer">
        <a href="https://github.com/Patrick-UNCG/pokedex" className='footer-link'><i id="github-link" className="fa-brands fa-github"></i></a>
      </div>
    </div>
  );
}

export default App;
