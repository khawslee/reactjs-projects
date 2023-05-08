import React, {useContext} from 'react'
import Title from '../components/Title'
import Button from 'react-bootstrap/Button';
import { ThemeContext } from './context/theme-context';

export default function Blog() {

    const {theme, changeTheme} = useContext(ThemeContext);

  return (
    <div className='container p-1'>
      <Title text={`Bienvenidos ${theme}`} />
      <span style={{ position: 'absolute', top: 10,right:10}}>
        <Button variant={`${theme}`} onClick={changeTheme}>{theme}</Button>
      </span>
    </div>
  )
}
