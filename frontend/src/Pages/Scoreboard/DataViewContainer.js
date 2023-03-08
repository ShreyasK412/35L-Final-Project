// import React from 'react';
// import _ from 'lodash';
// import ShotChart from './ShotChart';
// import { CountSlider } from './CountSlider';
// import { Radio, Row, Col, Switch } from 'antd';

// const RadioGroup = Radio.Group;

// export class DataViewContainer extends React.Component {
//     state = {
//         minCount: 2,
//         chartType: 'hexbin',
//         displayTooltip: true,
//     }

//     onCountSliderChange = (count) => {
//         this.setState({ minCount: count });
//     }

//     onChartTypeChange = (e) => {
//         console.log(e.target.value);
//         this.setState({ chartType: e.target.value });
//     }

//     onTooltipChange = (displayTooltip) => {
//         console.log(displayTooltip);
//         this.setState({ displayTooltip });
//     }

//     render() {
//         console.log('render');
//         return (
//             <div className="data-view">
//                 <ShotChart
//                     playerId={this.props.playerId}
//                     minCount={this.state.minCount}
//                     chartType={this.state.chartType}
//                     displayTooltip={this.state.displayTooltip}
//                 />
//                 <div className="filters">
//                     {this.state.chartType === 'hexbin' ?
//                         <CountSlider offset = {4} value={this.state.minCount}
//                                      onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}/> : null}
//                     <br/>
//                     <Row>
//                         <Col offset = {4} span={10}>
//                             <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
//                                 <Radio value="hexbin">Hexbin</Radio> <Radio value="scatter">Scatter</Radio>
//                             </RadioGroup>
//                         </Col>
//                         <Col span={4}>
//                             <Switch
//                                 checkedChildren="On"
//                                 unCheckedChildren="Off"
//                                 onChange={this.onTooltipChange}
//                                 defaultChecked />
//                         </Col>
//                     </Row>
//                 </div>
//             </div>
//         );
//     }
// }