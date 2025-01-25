import React from 'react'
import Father from './Father';
import { FamilyContext } from '../../context/FamilyContext';

function GrandFather() {
    const houseName = '스파르타';
    const pocketMoney = 10000;
  return (
    <div>
      <FamilyContext.Provider value={{
        houseName,
        pocketMoney
      }}>
        <Father/>
      </FamilyContext.Provider>
    </div>
  )
}

export default GrandFather
