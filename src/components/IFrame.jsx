function Iframe(props) {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
        className="rounded-md"
      />
    </div>
  );
}

export default Iframe;
