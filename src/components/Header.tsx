interface IProps {
  title: string;
}

export function Header({ title }: IProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {title}</span>
      </span>
    </header>
  );
}
