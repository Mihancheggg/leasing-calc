import React from 'react';
import './App.css';
import {Title} from './ui/Title/Title';
import {UniversalButton} from './ui/UniversalButton/UniversalButton';
import {useAppSelector} from './bll/store';

function App() {
  const status = useAppSelector(state => state.calc.status)
  return (
    <div className="App">
      <Title title={'Рассчитайте стоимость автомобиля в лизинг'}/>
      <UniversalButton title={'Оставить заявку'} status={status} callback={()=>{}}/>
    </div>
  );
}

export default App;
