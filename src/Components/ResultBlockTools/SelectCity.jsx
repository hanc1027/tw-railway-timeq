const SelectCity = (props) => {
  return props.stations.map((station) => {
    return <div>{station.city}</div>;
  });
};

export default SelectCity;
