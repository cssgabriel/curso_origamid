import { useUi } from "./UiContext";

const Header = () => {
  const { dark, setDark } = useUi();
  return (
    <header>
      <h1>{dark ? "dark" : "light"}</h1>
      <button onClick={() => setDark((d) => !d)}>
        Ativar modo {dark ? "light" : "dark"}
      </button>
    </header>
  );
};

export default Header;
