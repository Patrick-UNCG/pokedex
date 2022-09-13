import React from 'react'
import { motion } from 'framer-motion'
import PokeStats from './PokeStats'

export default function PokeEntry(props) {
  return (
    <motion.div
      key={props.name}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className='container'
      style={{ background: `linear-gradient(180deg,${props.color1} , ${props.color2}, gray, #E5F8FF )` }}>
      <div className='div-table'>
        <div className='div-table-body'>
          <div className='poke-header'>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              className='id-name'
              href={props.wiki}>
              <div className='poke-name'>{props.name.toUpperCase()}</div>
              <div className='poke-id'>#{props.id}</div>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              href={props.wiki}>
              <img className='trans-poke' src={require("../images/trans-poke.png")} alt="pokeball icon" />
            </motion.a>
          </div>
          <div className='img-button-container'>
            <motion.span
              whileHover={{ scale: 1.4 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              onClick={props.prevPokemon} className="poke-button"><i className="fa-solid fa-angles-left fa-2xl arrow"></i>
            </motion.span>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="img-sprite" src={props.sprites["front_default"]} alt="pokemon-sprite" />
            <motion.span
              whileHover={{ scale: 1.4 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              onClick={props.nextPokemon} className="poke-button"><i className="fa-solid fa-angles-right fa-2xl arrow"></i>
            </motion.span>
          </div>
          <div className='poke-stats'>
            <div className='div-table-row'>
              <div className='div-table-cell poke-type' style={{
                background: `${props.color2 !== 'gray' ? `linear-gradient(90deg,${props.color1} , ${props.color2}` :
                  props.color1}`, border: `5px none`
              }}>{props.type}</div>
              <div className='poke-stat-name'>Type</div>
            </div>
            <div className='div-table-row'>
              <div className='div-table-cell'>{props.abilities}</div>
              <div className='poke-stat-name'>Abilities</div>
            </div>
            <div className='div-table-row'>
              <div className='div-table-cell'>{" "}{Math.round(props.height * 3.9)}"</div>
              <div className='poke-stat-name'>Height</div>
            </div>
            <div className='div-table-last-row'>
              <div className='div-table-cell'>{" "}{Math.round(props.weight / 4.3)} lbs</div>
              <div className='poke-stat-name'>Weight</div>
            </div>
          </div>
          <PokeStats
            hp={props.hp}
            atk={props.atk}
            def={props.def}
            spAtk={props.spAtk}
            spDef={props.spDef}
            spd={props.spd}
            name={props.name}
          />
        </div>
      </div>
    </motion.div>
  )
}
