import { useGlobalContext } from "../context";

const Search = () => {
  const { filters, updateFilters, clearFilters, filterData, setFilterPopup } =
    useGlobalContext();
  const {
    name,
    year,
    minMass,
    maxMass,
    mass,
    composition,
    compositionOptions,
  } = filters;

  const handleSubmit = (e) => {
    e.preventDefault();
    filterData();
  };
  return (
    <section className="form-container">
      <div onClick={() => setFilterPopup(false)} className="close-button">
        X
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-rows">
          {/* Search input */}

          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Meteor Name
            </label>
            <input
              type="text"
              className="form-input"
              id="name"
              name="name"
              value={name}
              onChange={updateFilters}
            />
          </div>

          {/* Year input */}

          <div className="form-row">
            <label htmlFor="year" className="form-label">
              Year Of Strike
            </label>
            <div className="input-container">
              <input
                type="range"
                min={1400}
                max={2023}
                value={year}
                className="form-input"
                id="year"
                name="year"
                onChange={updateFilters}
                title={year}
              />
              <div
                className="range-container"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span title="Minimum Year">1400</span>
                <span title="Maximum Mass">2023</span>
              </div>
            </div>
          </div>

          {/* Mass input */}

          <div className="form-row">
            <label htmlFor="mass" className="form-label">
              Meteorite Mass
            </label>
            <div className="input-container">
              <input
                type="range"
                min={minMass}
                max={maxMass}
                value={mass}
                className="form-input"
                id="mass"
                name="mass"
                onChange={updateFilters}
                title={mass}
              />
              <div
                className="range-container"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span title="Minimum Mass">{minMass}</span>
                <span title="Maximum Mass">{maxMass}</span>
              </div>
            </div>
          </div>

          {/* Composition input */}
          <div className="form-row">
            <label htmlFor="composition" className="form-label">
              Composition
            </label>
            <select
              type="text"
              id="composition"
              name="composition"
              className="form-select"
              defaultValue={composition}
              onChange={updateFilters}
            >
              {compositionOptions.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="form-btns">
          <button type="submit" className="btn-submit">
            Search
          </button>
          <button type="button" className="btn-reset" onClick={clearFilters}>
            Clear
          </button>
        </div>
      </form>
    </section>
  );
};
export default Search;
