import React, { Component } from 'react';

import ParallaxBase from './ParallaxBase';
import ParallaxGroup from './ParallaxGroup';
import ParallaxLayer, { back, base } from './ParallaxLayer';

import Header from '../Header/Header';
import './parallax.scss';

export const getBaseLayerSize = () => {
  const baseLayer = document.getElementsByClassName('parallax__layer--base');
  if (baseLayer) {
    return baseLayer[0].scrollHeight;
  }
  return undefined;
}

const defaultState = {
  backLayerHeight: '100vh',
};

class ParallaxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  componentDidUpdate() {
    const height = getBaseLayerSize();
    if (height && height !==  this.state.backLayerHeight) {
      this.setState({
        backLayerHeight: height,
      });
    }
  }

  componentDidMount() {
    const height = getBaseLayerSize();
    if (height && height !==  this.state.backLayerHeight) {
      this.setState({
        backLayerHeight: height,
      });
    }
  }

  render() {
    const { background, children, header } = this.props;
    const { backLayerHeight } = this.state;
    return (
      <ParallaxBase>
        <ParallaxGroup>
          <ParallaxLayer layer={back} height={backLayerHeight}>
            {background}
          </ParallaxLayer>
          <ParallaxLayer layer={base}>
            {header}
            {children}
          </ParallaxLayer>
        </ParallaxGroup>
      </ParallaxBase>
    );
  }
}

ParallaxComponent.defaultProps = {
  background: <div className="image-background" />,
  header: <Header />,
};

export default ParallaxComponent;
