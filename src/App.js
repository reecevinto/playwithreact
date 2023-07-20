import { imageUrl } from "./imageurl";
import "./styles.css";
const person = {
  name: "Gregorio y. Zara",
  imageId: "7vQD0fP",
  imageSize: "b",
  theme: {
    backgroundColor: "purple",
    color: "white"
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className="avatar" src={imageUrl(person)} alt={person.name} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the local-fueled engine</li>
      </ul>
    </div>
  );
}
