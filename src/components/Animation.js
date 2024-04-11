import React, { Component } from 'react';
import './Animation.css'; // Import your CSS file

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnimating: false,
      target: props.target_metadata,
      attacker: props.attacker_metadata
    };
  }

  componentDidMount() {
    // Calculate the initial position of the animated div and the target div
    const startCoordinates = this.attacker.getBoundingClientRect();
    const targetCoordinates = this.target.getBoundingClientRect();
    this.setState({
      startCoordinates,
      endCoordinates: targetCoordinates,
    });
  }

  startAnimation = () => {
    this.setState({ isAnimating: true }, () => {
      // Calculate the direction and distance for animation
      const { startCoordinates, endCoordinates } = this.state;
      const deltaX = endCoordinates.left - startCoordinates.left;
      const deltaY = endCoordinates.top - startCoordinates.top;
      const animationDuration = 1000; // Set the duration in milliseconds

      this.attacker.style.transition = `transform ${animationDuration}ms ease-in-out`;
      this.attacker.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

      setTimeout(() => {
        this.setState({ isAnimating: false });
        this.attacker.style.transform = 'translate(0, 0)';
      }, animationDuration);
    });
  };

  render() {
    return (
      <div>
        <div
          ref={(div) => (this.animatedDiv = div)}
          className={`animated-div ${this.state.isAnimating ? 'animating' : ''}`}
        >
          Animated Div
        </div>
        <div
          ref={(div) => (this.targetDiv = div)}
          className="target-div"
        >
          Target Div
        </div>
        <button onClick={this.startAnimation}>Start Animation</button>
      </div>
    );
  }
}

export default Animation;
