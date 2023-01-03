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

        <section className='input_section'>
          <form className='input_container'>
            <div>
              <input placeholder='Shorten a link here ...'  required
                  type='text' /></div>
            <button className='btn input_btn'> shorten it!</button>
          </form>
        </section>

        <section className='cards_section'>
          <div className='card_container'>
            <div className='card_intro_section'>
              <h2>Advanced Statistics</h2>
              <p>Track how your links are performing across the web with our advanced statistics dashboard. </p>
            </div>
        
          <div className='cards'>

          <div className='left_grid'>
            {/* <div className='left_card'> */}
            <div className='card '>
              <img src='/images/icon-brand-recognition.svg' alt='brand recognition' className='card_img' />
                <h3> Brand Recognition </h3>
                <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. </p>
           </div>
           {/* </div> */}
          </div>
            <div className='center_grid'>
              <div className='card center_card'>
                <img src='/images/icon-detailed-records.svg' alt='detailed records' className='card_img'/>
                <h3>Detailed Records</h3>
                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
              </div>
            </div>

            <div className='right_grid'>
              <div className='card'>
                <img src='/images/icon-fully-customizable.svg' alt='fully customizable'  className='card_img'/>
                <h3>  Fully Customizable</h3>
                <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
              </div>
            </div>

          </div>
         </div>
        </section>

      <section className='banner'>
        <article className="banner_text">
          <h4>Boost your links today</h4>
          <button className='btn'> get started </button>
        </article>
      </section>

      <footer className='footer_section'>
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
      </footer>
    </main>
  )
}
