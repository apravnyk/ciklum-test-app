import { Table } from 'antd';
import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { Film } from '../types';

const columns: ColumnsType<Film> = [
  {
    title: 'Films',
    dataIndex: 'title',
    render: (text: string) => <span>{text}</span>,
  },
];

interface FilmsTableProps {
  filmsData: Film[];
  loading: boolean;
  onSelectedFilm: (Film: Film) => void;
  selectedFilmId?: number | string | React.Key;
}

export const FilmsTable: React.FC<FilmsTableProps> = (
  props: FilmsTableProps
) => {
  const { filmsData, loading, onSelectedFilm, selectedFilmId } = props;

  const rowSelection = {
    onChange: (_: React.Key[], item: Film[]) => {
      onSelectedFilm(item[0]);
    },
  };

  return (
    <Table
      rowSelection={{
        type: 'radio',
        selections: true,
        selectedRowKeys: selectedFilmId ? [selectedFilmId] : [],
        ...rowSelection,
      }}
      columns={columns}
      dataSource={filmsData}
      loading={loading}
      pagination={false}
      bordered
    />
  );
};
