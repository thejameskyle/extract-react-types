// @flow
import React from 'react';

import { usePropsExplorer } from 'pretty-proptypes';
import FlowComponent from './FlowComponent';
import TypeScriptComponent from './TypeScriptComponent';

export default {
  title: 'Example/usePropsExplorer'
};

const Template = args => {
  const propTypes = usePropsExplorer({ component: args.component });

  return (
    <div>
      <h1>usePropsExplorer</h1>

      <p>
        The usePropsExplorer hook takes a component and will return all prop types for said
        component. This gives the consumer 100% freedom on how to handle the prop types.
      </p>

      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th align="left" width="200">
              Prop name
            </th>
            <th align="left" width="150">
              Required?
            </th>
            <th align="left" width="150">
              Type
            </th>
            <th align="left" width="200">
              Default
            </th>
            <th align="left">Description</th>
          </tr>
        </thead>
        <tbody>
          {propTypes.map(prop => (
            <tr key={prop.key.name}>
              <td>{prop.key.name}</td>
              <td>{prop.optional ? 'no' : 'yes'}</td>
              <td>{prop.value.kind}</td>
              <td>{prop.default ? prop.default.value : ''}</td>
              <td>
                {prop.leadingComments
                  ? prop.leadingComments.reduce((acc, { value }) => acc.concat(`\n${value}`), '')
                  : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Flow = Template.bind({});

Flow.args = {
  component: FlowComponent
};

export const TypeScript = Template.bind({});

TypeScript.args = {
  component: TypeScriptComponent
};
