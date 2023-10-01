import { useState } from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [State, setState] = useState(false);

  const handleClick = () => {
    setState(!State);
  }

  return (
    <div className="container">
      <strong>{State ? "Hello" : ""} {name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <img src="/dist/favicon.png" alt="ionic icon" onClick={handleClick} style={{marginTop: "20px"}} />
    </div>
  );
};

export default ExploreContainer;
