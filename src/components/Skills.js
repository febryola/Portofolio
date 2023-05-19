import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Proficient in frontend and backend web development, utilizing frameworks such as React, Vue.js, Angular, PHP Laravel, Node.js, Next.js, and more. Skilled in HTML, CSS, and JavaScript for creating visually appealing and responsive web pages, and experienced in building dynamic and interactive user interfaces. Additionally, experienced in data manipulation and analysis using Python or R for data science tasks, implementing machine learning algorithms for predictive modeling, and developing mobile applications for iOS and Android platforms using languages like Swift or Java/Kotlin. Proficient in software engineering principles, utilizing programming languages like Java, C++, or C# to design, develop, and test robust software systems.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Frontend Developmet" />
                                <h5>Frontend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="UI/UX" />
                                <h5>UI/UX</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Fullstack Development" />
                                <h5>Fullstack Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Mobile Development" />
                                <h5>Mobile Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
