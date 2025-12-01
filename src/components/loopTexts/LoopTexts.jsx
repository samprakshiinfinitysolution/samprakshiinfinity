import React from 'react';
import "./loopTexts.css";
import aws from "../../images/icons8-aws-64.png";
import reactLogo from "../../images/icons8-react-50.png"; // Renamed to avoid conflict
import node from "../../images/node.png"; // Renamed to avoid conflict
import android from "../../images/android.png"; // Renamed to avoid conflict
import office from "../../images/office.png"; // Renamed to avoid conflict
import next from "../../images/next.png";
import flutter from "../../images/flutter.png"; // Renamed to avoid conflict
import Image from 'next/image';

const techStack = [
    { img: aws, title: "AWS" },
    { img: reactLogo, title: "React" },
    { img: node, title: "Node" },
    { img: android, title: "Android" },
    { img: flutter, title: "Flutter" },
    { img: office, title: "Back Office" },
    { img: reactLogo, title: "React" },
    { img: next, title: "Next" },

   

];

function LoopTexts() {
    return (
        <div className="loopTexts">
            <div className="loopTexts-container">
                <div className="loopTexts-track">
                    {techStack.concat(techStack).map((item, index) => ( // Duplicate array for seamless looping
                        <div className="loopTexts-box" key={index}>
                            <Image className="loopText-img" src={item.img} alt={item.title} />
                            <h5 className="loopText-title">{item.title}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LoopTexts;

