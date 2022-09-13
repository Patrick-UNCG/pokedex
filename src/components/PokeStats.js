import React from 'react'
import { motion } from 'framer-motion';

export default function PokeStats(props) {
    return (
        <div className='pokemon-stats'>
            <div className='pokemon-stat-container'>
                <div className='hp' >HP:</div>
                <div className='hp-bar'>{props.hp}</div>
            </div>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(props.hp / 300) * 100}%` }}
                className='progress-bar'
                style={{ background: 'red' }}>
            </motion.div>
            <div className='pokemon-stat-container'>
                <div className='atk'>ATK:</div>
                <div className='hp-bar'>{props.atk}</div>
            </div>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(props.atk / 300) * 100}%` }}
                className='progress-bar'
                style={{ background: 'orange' }}>
            </motion.div>
            <div className='pokemon-stat-container'>
                <div className='def'>DEF:</div>
                <div className='hp-bar'>{props.def}</div>
            </div>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(props.def / 300) * 100}%` }}
                className='progress-bar'
                style={{background:'yellow'}}>
                </motion.div>
            <div className='pokemon-stat-container'>
                <div className='sp-atk'>SP-ATK:</div>
                <div className='hp-bar'>{props.spAtk}</div>
            </div>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(props.spAtk / 300) * 100}%` }}
                className='progress-bar'
                style={{background:'blue'}}>
                </motion.div>
            <div className='pokemon-stat-container'>
                <div className='sp-def'>SP-DEF:</div>
                <div className='hp-bar'>{props.spDef}</div>
            </div>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(props.spDef / 300) * 100}%` }}
                className='progress-bar'
                style={{background:'green'}}>
                </motion.div>
            <div className='pokemon-stat-container'>
                <div className='spd'>SPD:</div>
                <div className='hp-bar'>{props.spd}</div>
            </div>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(props.spd / 300) * 100}%` }}
                className='progress-bar'
                style={{background:'pink'}}>
                </motion.div>
        </div>
    )
}
