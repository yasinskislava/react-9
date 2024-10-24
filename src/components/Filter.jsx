export default function Filter({ method }) {
    return (
      <label htmlFor="filter">
        Find filter by name
        <input type="text" onInput={(e) => { method(e.target.value.toLocaleLowerCase()) }} />
      </label>
    );
}