import React from 'react'
import '../../styles/hero.scss'
import { Resources, features } from './FooterData'
// import { features } from './FooterData'
export const Main = () => {
  return (
    <main className='main'>

        <section className='hero_section '>
          <div className='center'>
            <article className='hero_text'>
                <h1>more than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights 
                    on how your links are performing.</p>
                <button className='btn'>get started</button>
                {/* <div className='hero_img'> hi</div> */}
            </article>
         <div className='hero_img'> <img src='images/illustration-working.svg' alt='' /></div>
        </div>
        </section>
        {/* <section>
          <input />
          <button className='btn input_btn'> shorten it?</button>
        </section> */}

        {/* <section className='cards_section'>
          <div className='card_container'>
            <div className='card_intro_section'>
              <h2></h2>
              <p></p>
            </div>
        
          <div className='cards'>

          <div className='left_grid>
            <div className='card>
              <img src='' alt=''/>
              <h3></h3>
              <p></p>
            </div>
             </div>

            <div className='center_grid>
             <div className='card>
              <img src='' alt='' />
              <h3></h3>
              <p></p>
              </div>
            </div>

            <div className='right_grid>
             <div className='card>
              <img src='' alt='' />
              <h3></h3>
              <p></p>
              </div>
            </div>
          </div>
        </div>
        </section> */}

      <section className='banner'>
        <div className="banner_text">
          <h4>Boost your links today</h4>
          <button className='btn'> get started </button>
        </div>
      </section>

      <section className='footer_section'>
        <div className='footer_container'>
          <span className='footer_logo'><img src='/images/logo-footer.svg' alt='logo ' /></span>
          <div className='footer_nav'>
            {features.map((item, index)=>{
              <span key={index} item={item.title}>{item.title}</span>
            })}
            {Resources.map((item, index) => {
              <span key={index} item={item.title}>{item.title}</span>
            })}
          </div>
          <ol>
            <li><img src='/images/icon-facebook.svg' alt='social media facebook icon' /></li>
            <li><img src='/images/icon-twitter.svg' alt='social media facebook icon' /></li>
            <li><img src='/images/icon-pinterest.svg' alt='social media facebook icon' /></li>
            <li><img src='/images/icon-instagram.svg' alt='social media facebook icon' /></li>
          </ol>
        </div>
      </section>
    </main>
  )
}
