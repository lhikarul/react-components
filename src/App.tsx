import { ThemeProvider } from "@emotion/react";
import Accordion from "./components/Accordion";
import { theme } from "./theme";

function App() {
  const dataSource = [
    {
      header: <div>header</div>,
      content: (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            temporibus vitae? Quidem quam placeat, iusto soluta debitis
            consequuntur tempora sed a voluptates maiores repudiandae dolor?
            Deleniti ex cumque at iste!
          </p>
        </div>
      ),
    },
    {
      header: <div>header 2</div>,
      content: (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            temporibus vitae? Quidem quam placeat, iusto soluta debitis
            consequuntur tempora sed a voluptates maiores repudiandae dolor?
            Deleniti ex cumque at iste!
          </p>
        </div>
      ),
    },
    {
      header: <div>header 3</div>,
      content: (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            temporibus vitae? Quidem quam placeat, iusto soluta debitis
            consequuntur tempora sed a voluptates maiores repudiandae dolor?
            Deleniti ex cumque at iste!
          </p>
        </div>
      ),
    },
  ];
  return (
    <ThemeProvider theme={theme.default}>
      <Accordion>
        {dataSource.map((item, index) => (
          <Accordion.Panel key={index} header={item.header}>
            {item.content}
          </Accordion.Panel>
        ))}
      </Accordion>
    </ThemeProvider>
  );
}

export default App;
