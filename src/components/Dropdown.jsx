import { Dropdown } from "react-bootstrap";
import react, { useState } from "react";

const AuthorDropdown = ({ authors }) => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  return (
    <div className="dropdown">
      <Dropdown>
        <Dropdown.Toggle variant="clear" id="dropdown-basic">
          {selectedAuthor ? selectedAuthor.authorName : "Select an author:"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {authors.map((author) => (
            <Dropdown.Item
              // href={author.authorName}
              key={author.authorId ?? author.authorName}
              onClick={() => setSelectedAuthor(author)}
            >
              {author.authorName}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default AuthorDropdown;
