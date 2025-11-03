import MapMaker from '../../Map'
import './index.css'
import { useState } from 'react'
import Flag from 'react-world-flags'

function PopOut() {
    return;
}

const flags = (
    <div className="Flags">
        <div className="Tooltip">
            <Flag code="nl" height="16"/>
            <span className="TooltipText">Netherlands</span>
        </div>
        <div className="Tooltip">
            <Flag code="de" height="16"/>
            <span className="TooltipText">Germany</span>
        </div>
        <div className="Tooltip">
            <Flag code="fr" height="16"/>
            <span className="TooltipText">France</span>
        </div>
        <div className="Tooltip">
            <Flag code="ch" height="16"/>
            <span className="TooltipText">Switzerland</span>
        </div>
        <div className="Tooltip">
            <Flag code="at" height="16"/>
            <span className="TooltipText">Austria</span>
        </div>
        <div className="Tooltip">
            <Flag code="li" height="16"/>
            <span className="TooltipText">Liechtenstein</span>
        </div>
        <div className="Tooltip">
            <Flag code="it" height="16"/>
            <span className="TooltipText">Italy</span>
        </div>
    </div>
);

const infoTab = (
    <> 
        This is an interactive map of a solo cycle tour I did between the 19th of July and the 14th of August 2025. Click to drag and scroll to zoom.<br /><br />
        Some quick facts...
        <ul>
            <li>Time taken: 27 days</li>
            <li>Distance covered: &gt; 1,600km</li>
            <li>Countries travelled through: 7 {flags}</li>
            <li>Highest point: 2106m</li>
            <li>Lowest point: -8m</li>
            <li>Flat tyres: 3 (not bad!)</li>
        </ul>
    </>
);

function BikeTripPage() {
    const [tabOut, setTabOut] = useState(false);
    return (
        <div>
            <div className="MapContainer">
                    <MapMaker />
            </div>
            <div className="PopOutTab" onClick={() => {
                    PopOut();
                    setTabOut(true);
                }
            }>
                <div className="TabLabel">
                    info
                </div>
            </div>
            <div className={tabOut ? "PopOutWindow AnimateOut" : "PopOutWindow AnimateIn"} onClick={() => setTabOut(false)}>
                {infoTab}
            </div>
        </div>
    );
}

export default BikeTripPage;