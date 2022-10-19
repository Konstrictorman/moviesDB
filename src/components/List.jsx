import React from 'react';
import { BestMovie } from './BestMovie';
import Grade from './Grade';
import { Switch } from './Switch';

class List extends React.Component {
  render() {
    const MemoComp = React.memo((props) => {
      const { movie } = props;
      console.log("Rendering memoComp");
      return <div style={{ color: 'yellow' }}>BestMovie ever: {movie}</div>;
    });

    const title = React.createElement('h4', null, "Tarantino's movies");
    const pf = React.createElement(
      'li',
      { style: { fontSize: '18px', fontWeight: 'bold' } },
      'Pulp fiction',
      <Switch id="pf" onLabel="Watched" offLabel="Not watched" />
    );
    const jb = React.createElement(
      'li',
      { style: { fontSize: '18px', fontWeight: 'bold' } },
      'Jackie Brown',
      <Switch id="jb" onLabel="Watched" offLabel="Not watched" />
    );
    const he = React.createElement(
      'li',
      { style: { fontSize: '18px', fontWeight: 'bold' } },
      'The hateful eight',
      <Switch id="he" onLabel="Watched" offLabel="Not watched" />
    );
    const du = React.createElement(
      'li',
      { style: { fontSize: '18px', fontWeight: 'bold' } },
      'Django unchained',
      <Switch id="du" onLabel="Watched" offLabel="Not watched" />
    );
    const ub = React.createElement(
      'li',
      { style: { fontSize: '18px', fontWeight: 'bold' } },
      'Unglorious basterds',
      <Switch id="ub" onLabel="Watched" offLabel="Not watched" />
    );
    const uo = React.createElement(
      'li',
      { style: { fontSize: '18px', fontWeight: 'bold' } },
      'Once upon a time in Hollywood',
      <Switch id="oh" onLabel="Watched" offLabel="Not watched" />
    );
    const kb = React.createElement(
      'li',
      { style: { fontSize: '18px', fontWeight: 'bold' } },
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
      <MemoComp movie="Kill Bill"/>,
      <br />
    );
    return container;
  }
}

export default List;
