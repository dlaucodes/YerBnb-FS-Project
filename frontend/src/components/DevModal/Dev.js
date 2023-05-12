import "./Dev.css"
import gitlogo from "../../assets/logos/github-mark.png";
import linkedinlogo from "../../assets/logos/linkedinlogo.png";
import wellfoundlogo from "../../assets/logos/wellfoundlogo.png";
import emaillogo from "../../assets/logos/email.png";



const Dev = ({setShowDevModal}) =>{
    
    return (
        <>
        <div className="dev-container">
                    
                    <a className="dev-icon" href="mailto: dlaucodes@gmail.com"> 
                        <img src={emaillogo} alt="gmaillogo"/>
                    </a>

                    <a className="dev-icon" href="https://github.com/dlaucodes/" target="_blank" rel="noopener noreferrer">
                        <img src={gitlogo} alt="githublogo"/>
                    </a>
                         
                    
                    <a className="dev-icon" href="https://www.linkedin.com/in/dlaucodes/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinlogo} alt="linkedinlogo"/>
                    </a>
                    
                    
                    <a className="dev-icon" href="https://angel.co/u/chun-k-lau" target="_blank" rel="noopener noreferrer">
                        <img src={wellfoundlogo} alt="wellfoundlogo"/>
                    </a>
                    
                    <div></div>

            
        </div>
        </>
    )
}

export default Dev;