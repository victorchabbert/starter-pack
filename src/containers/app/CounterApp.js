import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from '../../redux/actions/counter'

import Counter from '../../components/counter'

const mapStateToProps = ({ counter }) => {
  return {
    counter
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(CounterActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
