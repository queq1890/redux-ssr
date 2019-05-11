import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Counter from '../components/Counter';
import { decrement, increment } from '../redux/counter/actions';
import { CounterState } from '../redux/counter/reducer';

interface StateProps {
  count: number;
}

interface DispatchProps {
  decrement: () => void;
  increment: () => void;
}

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
