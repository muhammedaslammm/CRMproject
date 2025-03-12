const EmptyData = ({ cache }) => {
  return (
    <div className="section--empty_data">
      <p>
        There are no {cache} available. Add {cache}
      </p>
    </div>
  );
};

export default EmptyData;
