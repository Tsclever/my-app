import Button from '../Button';

function UploadButton() {
  return (
    <Button onWhatEver={() => alert('Uploading!')}>
      Upload Image
    </Button>
  );
}

export default UploadButton;