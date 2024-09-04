export default function Filter({obj}) {
    return (
      <label htmlFor="filter">
        Find filter by name
        <input type="text" onInput={(e) => {obj.setState({ filter: e.target.value.toLocaleLowerCase() });}}/>
      </label>
    );
}