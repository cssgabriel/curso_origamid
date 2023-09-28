import { useContextEx01 } from "./Ex01";

const Header = () => {
  const { data } = useContextEx01();
  return <div>{data?.nome}</div>;
};

export default Header;
