import React from "react";

type ButtonProps = {
  tamanho: string;
  children: React.ReactNode;
  onClick?: () => void;
};

// outra forma de anotar
type ButtonProps2 = React.PropsWithChildren<{
  tamanho: string;
  children: React.ReactNode;
  onClick?: () => void;
}>;

// outra forma de anotar
type ButtonProps3 = React.ComponentProps<"button"> & {
  tamanho?: string;
};

// const Button = ({ tamanho, onClick, children }: ButtonProps3) => {
//   return (
//     <button className={className} onClick={onClick} style={{ fontSize: tamanho }}>
//       {children}
//     </button>
//   );
// };
const Button = ({ tamanho, children, ...props }: ButtonProps3) => {
  return (
    <button {...props} style={{ fontSize: tamanho }}>
      {children}
    </button>
  );
};

export default Button;
