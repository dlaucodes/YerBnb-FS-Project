import "./Dev.css"
import gitlogo from "../../assets/logos/github-mark.png";
import linkedinlogo from "../../assets/logos/linkedinlogo.png";
import wellfoundlogo from "../../assets/logos/wellfoundlogo.png";
import emaillogo from "../../assets/logos/email.png";



const Dev = ({setShowDevModal}) =>{
    
    return (
        <>
        <div className="dev-container">
            
                    <div className="dev-icon">
                        <a href="mailto: dlaucodes@gmail.com">
                        <img src={emaillogo} alt="gmaillogo"/></a>
                    </div>
                    <div className="dev-icon"><a href="https://github.com/dlaucodes/" target="_blank" rel="noopener noreferrer">
                        <img src={gitlogo} alt="githublogo"/></a>
                    </div>      
                    
                    <div className="dev-icon"><a href="https://www.linkedin.com/in/dlaucodes/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinlogo} alt="linkedinlogo"/></a>
                    </div>
                    
                    <div className="dev-icon"><a href="https://angel.co/u/chun-k-lau" target="_blank" rel="noopener noreferrer">
                        <img src={wellfoundlogo} alt="wellfoundlogo"/></a>
                    </div>
                

            
        </div>
        </>
    )
}

export default Dev;