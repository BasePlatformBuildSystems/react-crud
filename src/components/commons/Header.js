import Radium from 'radium';
import color from 'color';
import React from 'react';
import { Link } from 'react-router'

const styles = {
  base: {
    color: 'gray'
  },
  header: {
    fontSize: 26,
    // color: '#fff',
    ':hover': {
       background: color('#0074d9').lighten(0.2).string()
     }
  }

}
//@Radium
const Header = (props) => (
  <header className="header"
    style={[
      styles.base,
      styles.header
    ]}>

    <h1>React Raw Simple Forms</h1>
    <hr/>

    <Link to='/' className='btn btn-primary'>Home</Link>
    <Link to='about' className='btn btn-primary'>About</Link>
    <Link to='courses' className='btn btn-primary'>Courses</Link>
  </header>
);


export default Radium(Header);
