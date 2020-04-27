import StandardLayout from "../layouts/StandardLayout";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Index = () => {

    const [isChevShown, showChev] = useState(false)

    const index = (
      <div className="background-container">
    
        <img src="/images/himalayas.jpg" />
        <div className="center-content">
          <h1>Welcome</h1>
          <Link href="/dashboard">
            <p> Continue to dashboard? <FontAwesomeIcon icon={faArrowRight} /> </p>
    
          </Link>
        </div>
    
        <style jsx>{`
          .background-container {
            width: 100%;
            height: calc(100vh - 4rem);
            display: flex;
            justify-content: center;
            position: relative;
          }
          .background-container img {
            width: 100%;
            height: 100%;
            filter: brightness(40%);
            object-fit: cover;
            position: absolute;
          }
          .center-content {
            width: max-content;
            height: max-content;
            text-align: center;
            margin: auto;
            color: #ffffff;
            position: relative;
            bottom: 5vh;
          }
          .center-content h1 {
            margin-top: 0;
            font-size: 3rem;
          }
          .center-content p {
            font-size: 1.5rem;
            cursor: pointer;
          }
          .center-content p:hover {
            font-style: italic;
          }
        `}</style>
      </div>
    )

    return (
      <StandardLayout page={index} />
    )
}

export default Index;