import React from 'react';
import { BestMovie } from './BestMovie';
import { Switch } from './Switch';
import PureComponentTest  from './PureComponentTest';

const MemoComp = React.memo(function memoComp(props) {
  const { movie } = props;
  //console.log('Rendering memoComp');
  return <div style={{ color: 'yellow' }}>BestMovie ever: {movie}</div>;
});

//const BestMovieMemo = React.memo(<BestMovie movie="Pulp fiction"/>);

class List extends React.Component {
  render() {
    const title = React.createElement('h4', null, "Tarantino's movies");
    const pf = React.createElement(
      'li',
      { style: { fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' } },
      'Pulp fiction',
      <Switch id="pf" onLabel="Watched" offLabel="Not watched" />
    );
    const jb = React.createElement(
      'li',
      { style: { fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' } },
      'Jackie Brown',
      <Switch id="jb" onLabel="Watched" offLabel="Not watched" />
    );
    const he = React.createElement(
      'li',
      { style: { fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' } },
      'The hateful eight',
      <Switch id="he" onLabel="Watched" offLabel="Not watched" />
    );
    const du = React.createElement(
      'li',
      { style: { fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' } },
      'Django unchained',
      <Switch id="du" onLabel="Watched" offLabel="Not watched" />
    );
    const ub = React.createElement(
      'li',
      { style: { fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' } },
      'Unglorious basterds',
      <Switch id="ub" onLabel="Watched" offLabel="Not watched" />
    );
    const uo = React.createElement(
      'li',
      { style: { fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' } },
      'Once upon a time in Hollywood',
      <Switch id="oh" onLabel="Watched" offLabel="Not watched" />
    );
    const kb = React.createElement(
      'li',
      { style: { fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' } },
      'Kill Bill',
      <Switch id="kb" onLabel="Watched" offLabel="Not watched" />
    );
    const list = React.createElement('ul', null, pf, jb, he, du, ub, kb, uo);
    const container = React.createElement(
      'div',
      {
        style: { backgroundColor: '#6C1635', color: 'white', width: '60%' },
      },
      title,
      list,
      <br />,
      //<MemoComp movie="Kill Bill" />,
      //<BestMovie movie="Pulp fiction"/>,
      <PureComponentTest/>,
      <br />
    );
    return container;
  }
}

export default List;
