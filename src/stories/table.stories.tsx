import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Table from "../components/Table";

const Demo = styled.div`
  padding: 24px;
  background-color: rgb(231, 235, 240);
`;

export default {
  title: "SURFACES/Table",
  component: Table,
  argTypes: {
    onRowClick: {
      action: "onRowClick",
    },
  },
} as ComponentMeta<typeof Table>;

const columns = [
  {
    key: 1,
    title: "name",
    dataIndex: "name",
    render: (data: any) => (
      <div>
        {data.name} ({data.symbol})
      </div>
    ),
    width: "33%",
  },
  {
    key: 2,
    title: "price",
    dataIndex: "price",
    width: "33%",
  },
  {
    key: 3,
    title: "M.cap",
    dataIndex: "market_cap",
    width: "33%",
  },
];
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

const Template: ComponentStory<typeof Table> = (args) => (
  <Demo>
    <Table {...args} />
  </Demo>
);

export const Default = Template.bind({});

Default.args = {
  columns,
  dataSource,
};

export const Striped = Template.bind({});

Striped.args = {
  columns,
  dataSource,
  striped: true,
};

const fixedColumns = [
  {
    key: 1,
    title: "name",
    dataIndex: "name",
    render: (data: any) => (
      <div>
        {data.name} ({data.symbol})
      </div>
    ),
    width: "33%",
    fixed: true,
  },
  {
    key: 2,
    title: "price",
    dataIndex: "price",
    width: "33%",
  },
  {
    key: 3,
    title: "M.cap",
    dataIndex: "market_cap",
    width: "33%",
  },
];

const FixedTemplate: ComponentStory<typeof Table> = (args) => (
  <Demo>
    <Table {...args} />
  </Demo>
);

export const Fixed = FixedTemplate.bind({});

Fixed.args = {
  columns: fixedColumns,
  dataSource,
  minWidth: 600,
};

const sortColumns = [
  {
    key: 1,
    title: "name",
    dataIndex: "name",
    render: (data: any) => (
      <div>
        {data.name} ({data.symbol})
      </div>
    ),
    width: "33%",
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
    sortable: true,
  },
];

export const Sorted = Template.bind({});

Sorted.args = {
  columns: sortColumns,
  dataSource,
};

export const Skeleton = Template.bind({});

Skeleton.args = {
  columns,
  dataSource: [],
  skeletonOfRows: 3,
};
