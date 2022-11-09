import Button from '../Button';

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button onWhatEver={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

export default PlayButton;