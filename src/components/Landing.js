import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Fragment>
      <div className='Slide-One'>
        {/* <img
          src='img/abc.png'
          srcset='img/abc@2x.png 2x,
             img/abc@3x.png 3x'
          className='abc'
          alt='img'
        ></img> */}
        <div className='Industries-Services text-style-1'>
          <Link to='/industries'>Industries</Link>
          <br />
          <Link to='/services'>Services</Link>
          <br />
          <Link to='/about'>About Us</Link>
        </div>

        <div className='Rectangle'>
          <p className='Text'>Contact Us</p>
        </div>

        <div className='Lorem-ipsum-dolor-si'>Lorem ipsum dolor sit amet</div>

        <div className='Sed-ut-perspiciatis'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </div>

        <div className='Bg'>
          <p className='Nemo-enim-ipsam-volu'>
            Nemo enim ipsam voluptatem quia voluptas.
          </p>
          <p className='LETS-TALK'>LET’S TALK.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
