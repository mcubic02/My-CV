import DownloadButton from '../DownloadButton';

export default function DownloadButtonExample() {
  return (
    <div className="p-8 h-96">
      <DownloadButton language="en" />
      <p className="text-center text-muted-foreground">Click the button in the bottom-right corner</p>
    </div>
  );
}
