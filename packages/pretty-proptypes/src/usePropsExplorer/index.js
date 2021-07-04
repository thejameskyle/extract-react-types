import getPropTypes from '../getPropTypes';

const getProps = props => {
  if (props && props.component) {
    return getPropTypes(props.component);
  }
  return null;
};

export default function usePropsExplorer(props) {
  const { component } = props;
  if (component) {
    /* $FlowFixMe the component prop is typed as a component because
         that's what people pass to Props and the ___types property shouldn't
         exist in the components types so we're just going to ignore this error */
    if (component.___types) {
      props = { type: 'program', component: component.___types };
    } else {
      /* eslint-disable-next-line no-console */
      console.error(
        'A component was passed to <Props> but it does not have types attached.\n' +
          'babel-plugin-extract-react-types may not be correctly installed.\n' +
          '<Props> will fallback to the props prop to display types.'
      );
    }
  }

  let propTypes = getProps(props) || null;

  return propTypes;
}
