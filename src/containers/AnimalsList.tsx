import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import AnimalList from '../components/AnimalsList';
import { getAnimals } from '../redux/animals/actions';

import { Animal } from '../mocks/animalAPI';

interface StateProps {
  animals: Animal[];
  error?: Error;
}

interface DispatchProps {
  getAnimalsStart: () => void;
}

const mapStateToProps = (state): StateProps => ({
  animals: state.animals.animals,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  getAnimalsStart: () => dispatch(getAnimals.start()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnimalList);
