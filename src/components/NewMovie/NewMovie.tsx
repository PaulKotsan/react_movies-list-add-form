import { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

type MovieProps = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie = ({ onAdd }: MovieProps) => {
  const [count, setCount] = useState(0);

  const [titleAvailable, setTitleAvailable] = useState('');
  const [descriptionAvailable, setDescriptionAvailable] = useState('');
  const [imageUrlAvailable, setImageUrlAvailable] = useState('');
  const [imbdUrlAvailable, setImbdUrlAvailable] = useState('');
  const [imbdIdAvailable, setImbdIdAvailable] = useState('');

  const [isDisabled, setIsDisabled] = useState(true);

  const handleButton = () => {
    if (
      titleAvailable.trim() &&
      imageUrlAvailable.trim() &&
      imbdIdAvailable.trim() &&
      imbdUrlAvailable.trim()
    ) {
      setIsDisabled(false);
    }
  };

  return (
    <form
      className="NewMovie"
      key={count}
      onSubmit={event => {
        event.preventDefault();

        const movie = {
          title: titleAvailable,
          description: descriptionAvailable,
          imgUrl: imageUrlAvailable,
          imdbUrl: imbdUrlAvailable,
          imdbId: imbdIdAvailable,
        };

        onAdd(movie);

        setTitleAvailable('');
        setDescriptionAvailable('');
        setImageUrlAvailable('');
        setImbdUrlAvailable('');
        setImbdIdAvailable('');
        setIsDisabled(true);

        setCount(prev => prev + 1);
      }}
    >
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={titleAvailable}
        onChange={event => {
          setTitleAvailable(event);
          handleButton();
        }}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={descriptionAvailable}
        onChange={event => {
          setDescriptionAvailable(event);
          handleButton();
        }}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imageUrlAvailable}
        onChange={event => {
          setImageUrlAvailable(event);
          handleButton();
        }}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imbdUrlAvailable}
        onChange={event => {
          setImbdUrlAvailable(event);
          handleButton();
        }}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imbdIdAvailable}
        onChange={event => {
          setImbdIdAvailable(event);
          handleButton();
        }}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={isDisabled}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
