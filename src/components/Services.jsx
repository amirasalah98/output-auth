import LogoScroller from './LogoScroller.jsx';
import style from "./style.module.css"
import home from "./home.module.css"
function Services(){

    return(
        <>
        
        <div className={` container pt-5 ${home.servicesGrid}`}>
            <div className={home.service}>
              <h3>Development</h3>
              <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
            </div>
        
            <div className={home.service}>
              <h3>Design</h3>
              <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
            </div>
        
            <div className={home.service}>
              <h3>Strategy</h3>
              <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
            </div>
        
            <div className={home.service}>
              <h3>Performance</h3>
              <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
            </div>
            <div className={home.service}>
              <h3>Design</h3>
              <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
            </div>
            <div className={home.service}>
              <h3>Design</h3>
              <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
            </div>
          </div>
          <LogoScroller />
        </>
    )
}
export default Services;