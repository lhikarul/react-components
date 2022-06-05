import Button from "./components/Button";
import SearchIcon from "./Icons/Search";
function App() {
  return (
    <div>
      <Button variant="contained" prependIcon={<SearchIcon />}>
        Button
      </Button>
    </div>
  );
}

export default App;
