import React from "react";

interface searchProps {
  className: any;
  type: string;
  name: string;
  id: string;
  placeholder: string;
}

const Search: React.FC<searchProps> = ({
  className,
  type,
  name,
  id,
  placeholder,
}) => {
  return (
    <div>
      <input type={type} name={name} id={id} placeholder={placeholder} className={`${className}`} />
    </div>
  );
};

export default Search;
