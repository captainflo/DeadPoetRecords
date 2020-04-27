import React from 'react';
import { Field, reduxForm } from 'redux-form';
import M from 'materialize-css/dist/js/materialize.min.js';

const genres = [
  'Acoustic',
  'Alternative',
  'Blues',
  'Classical',
  'Country',
  'Electronic',
  'Hip Hop',
  'Beats and Instrumentals',
  'Jazz',
  'Latin',
  'Metal',
  'Podcasts',
  'Pop',
  'Rock',
  'Urban/R&B',
  'World',
];

const renderGenreSelector = ({ input, meta: { touched, error } }) => (
  <div className="input-field">
    <i className="material-icons prefix">album</i>
    <select {...input}>
      <option value="">Select a genre...</option>
      {genres.map((val) => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

class FormSearch extends React.Component {
  componentDidMount() {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }
  submit = (form) => {
    console.log(form);
  };

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <div className="row">
          <div className="col m6 s12">
            <Field name="value" component={renderGenreSelector} />
          </div>
          <div className="col m6 s12">
            <button
              type="submit"
              disabled={submitting}
              className="waves-effect waves-light btn"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(FormSearch);
