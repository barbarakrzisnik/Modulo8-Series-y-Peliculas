export const selectTemporadas = (temporadas) => {
    const options = [];
  
    for (let i = 0; i < temporadas; i++) {
      options.push(
        <option className="opcion-temporada" value={i + 1}>
          Temporada {i + 1}
        </option>
      );
    }
    return options;
  };