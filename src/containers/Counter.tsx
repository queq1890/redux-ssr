import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Counter from '../components/Counter';
import { decrement, increment } from '../redux/counter/actions';

interface StateProps {
  count: number;
}

interface DispatchProps {
  decrement: () => void;
  increment: () => void;
}

const mapStateToProps = (state): StateProps => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
