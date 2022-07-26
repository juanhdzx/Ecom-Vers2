import React from 'react';
import background from './wheels.jpg';

function Home() {
    return(
        <div>
            <main>
                <h1>Fitment Only</h1>
                <div className="hero-image" style={{ 
                        backgroundImage: `url(${background})`, 
                        backgroundRepeat: 'no-repeat',
                        // backgroundSize: 'contain', 
                        height:'800px',
                        width:'600'
                    }}>
                
                    <h3 id="homeHero" style={{color:'white', }}>THE JOURNEY TO YOUR NEW WHEELS START HERE</h3>
                </div>
                <p>We're a new wheel reselling business that is ready to grow and provide people with instant access to purchase our products through this website. </p>
                    <br/>
                    <p> Show season right around the corner! Make sure your fitment is nice and flush with the most stylish multipiece wheels on the market!</p>
                    <br/>
                <h3>Featured brands:</h3>
                    <div className="row">
                        <div className="column">
                            <img src="https://extremewheels.com/wp-content/uploads/2015/12/BBS-Wheels-Logo.png" alt="bbs wheels" /*style="width:100%"*/ />
                        </div>
                        <div className="column">
                            <img src="https://ffperformance.co/wp-content/uploads/2019/12/Rays-Wheels-Logo.png" alt="rays wheels"  /*style="width:100%"*//>
                        </div>
                        <div className="column">
                            <img src="https://lezebre.lu/images/detailed/16/28116-Work-Jantes-Logo.png" alt="work wheels"  /*style="width:100%"*//>
                            
                        </div>
                    </div>
            </main>

        
        {/*-------       red s15 silvia      ---------*/}
                <img id="silvia" src="https://stancespice.com/wp-content/uploads/2018/07/j3p01053_orig-compressor.jpg" alt="s15 on work meisters"/>
                <p>Like what you see?... ^   psst.. they are                           *Work Meister S1 P3*'s</p>
            

            
                <h3>From our Collection...</h3>
            <section class="cards">
                
                <article class="card">
                    <h5>Monoblocks</h5>
                    <img src="https://images.customwheeloffset.com/wheels-compressed-thumb/gramlights/57cr/57cr_blackchrome_white.jpg" alt="rays"/>
                    <p>Monoblock wheels are all the rage and with great weight savings and a mean demeanor, they've also become the best option for cars that sport high "positive" offsets. When you have a car that can't accommodate a large lip, multi-piece wheels can make your car look limp or narrow. </p>
                </article>

                <article class="card">
                    <h5>2-Piece Sets</h5>
                    <img src="https://images.customwheeloffset.com/wheels-compressed-thumb/bbs/lmr/lmr_bronze_white.jpg" alt="bbs"/>
                    <p>Two piece bolted wheels consist of the face and the barrel, attached to each other via bolts. A major advantage of this type of wheel is that if the barrel is bent or otherwise damaged, it may be possible to be replaced without replacing the whole wheel. </p>
                </article>

                <article class="card">
                    <h5>3-Piece Sets</h5>
                    <img src="https://images.customwheeloffset.com/wheels-compressed-thumb/work/meistercr01/meistercr01_polished_white.jpg" alt="work"/>
                    <p>Three piece wheels have two piece barrels and a face, and in some cases are able to be modified by changing one of the barrel pieces to make a wider (or narrower) wheel. </p>
                </article>

            </section>
        </div>
    )
}

export default Home;