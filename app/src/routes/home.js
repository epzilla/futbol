import { h, Component } from 'preact';
import Rest from '../lib/rest-service';
import { Link } from 'preact-router/match';
import StatsTable from '../components/statsTable';
import Expandable from '../components/expandable';
import Avatar from '../components/avatar';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="main home">
        <StatsTable showRecord={true} {...this.props} />
      </div>
    );
  }
}
