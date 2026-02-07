import './index.css'
import { LuConstruction } from 'react-icons/lu'

function Music(props) {
    return(
        <div className='HomePage'>
            <div className="Article">
                <div className="Centered">
                    <p>The music page is currently under construction...</p>
                    <br/>
                    <LuConstruction size={150} className="ConstructionIcon"/>
                </div>
            </div>
        </div>
    );
}

export default Music;