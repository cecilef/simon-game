import React from 'react';

export class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
      id: props.id
    };
  }

  render() {
    return (
      <div onClick={this.props.onClick}>test</div>
    )
  }
}
