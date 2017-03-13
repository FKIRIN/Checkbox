import React, { Component, PropTypes } from 'react';

export default class CheckBox2 extends Component {
  static defaultProps = {
    checkedValue: 'Y',
    unCheckedValue: 'N'
  }
  
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    name: PropTypes.string,
    className: PropTypes.string
  }
  
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }
  
  componentWillReceiveProps(nextProps) {
    let { value } = nextProps;
    if(value != this.props.value)
      this.setState({
        value
      });
  }
  
  handleClick(e){
    let { onChange, checkedValue, unCheckedValue } = this.props,
        { value } = this.state;
    if( value == checkedValue ){
      value = unCheckedValue
    }else{
      value = checkedValue
    }
    this.setState({value});
    e.target.value = value;
    onChange && onChange(e) 
  }
  
  render() {
    let { width, height, className='', name , ref} = this.props,
        { value } = this.state;
    if(value=='Y'){
      className += ' checked'
    }
    return <span className={`h-checkbox ${className}`} style={{width, height}} onClick={(e) => this.handleClick(e)}><input name={name} type="hidden" value= {value} ref={ref}/></span>
  }
}