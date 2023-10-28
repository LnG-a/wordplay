import React , { Component } from 'react';
import { Wrapper } from '../main/Main';

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <div>Not found</div>
      </Wrapper>
    )
  }
}

export default NotFound;