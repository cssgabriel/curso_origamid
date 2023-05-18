const Radio = ({ pergunta, options, onChange, value, id, active }: any) => {
  if (!active) return null;

  return (
    <fieldset style={{ marginBottom: "1rem", padding: "2rem" }}>
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((opt: string) => (
        <label key={opt}>
          <input
            type="radio"
            id={id}
            checked={value === opt}
            value={opt}
            onChange={onChange}
          />
          {opt}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
