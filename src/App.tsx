import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { useMemo } from "react";
import Table from "./components/Table";
import { theme } from "./theme";

const Demo = styled.div`
  padding: 24px;
  background-color: rgb(231, 235, 240);
`;

function App() {
  const columns = useMemo(
    () => [
      {
        key: 1,
        title: "name",
        dataIndex: "name",
        render: (data: any) => (
          <div>
            {data.name} ({data.symbol})
          </div>
        ),
        fixed: true,
        width: "33%",
        sortable: true,
      },
      {
        key: 2,
        title: "price",
        dataIndex: "price",
        width: "33%",
        sortable: true,
      },
      {
        key: 3,
        title: "M.cap",
        dataIndex: "market_cap",
        width: "33%",
      },
    ],
    []
  );
  const dataSource = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 60000,
      market_cap: "475,260,000,000",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: 4000,
      market_cap: "198,260,000,000",
    },
    {
      name: "SOLANA",
      symbol: "SOL",
      price: 200,
      market_cap: "13,309,123,000",
    },
    {
      name: "COSMOS",
      symbol: "ATOM",
      price: 54,
      market_cap: "33,0120,120",
    },
    {
      name: "Avalanche",
      symbol: "AVAX",
      price: 145,
      market_cap: "64,444,280",
    },
  ];
  return (
    <ThemeProvider theme={theme.default}>
      <Demo>
        <Table
          columns={columns}
          dataSource={dataSource}
          striped
          onRowClick={(data) => console.log(data)}
          minWidth={500}
          skeletonOfRows={3}
        />
      </Demo>
    </ThemeProvider>
  );
}

export default App;
