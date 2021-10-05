import React from 'react';
import './About.css'
import picture from  '../../Images/sabout.jpg';

const About = () => {
    return (
        <div className="container my-5">
            <h3>We are tutor in  an online learning community.</h3>
            <div  className ="about">
          
                <div>
                    <img src={picture} alt="" />
                    </div>
                <div>
                <h1 className="text-danger"><u>About Us</u></h1>
                    <p>As Tutor, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts</p>
                    <p>That thous art blamed shall not be thy defect, For slander's mark was ever yet the fair; The ornament of beauty is suspect, A crow that flies in heaven's sweetest air. So thou be good, slander doth but approve Thy worth the greater being woo'd of time; For canker vice the sweetest buds doth love, And thou present'st a pure unstained prime. Thou hast passed by the ambush of young days Either not assail'd, or victor being charged</p>
                </div>
            </div>
        </div>
    );
};

export default About;