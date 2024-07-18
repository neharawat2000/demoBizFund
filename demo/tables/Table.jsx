import React from 'react';
import { useTable, usePagination } from 'react-table';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ReusableTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    state: { pageIndex, pageSize },
    gotoPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }, // Set initial pageSize to 10
    },
    usePagination
  );

  return (
    <>
      <table {...getTableProps()} className='w-full text-gray-500 mt-8' >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 1px #D0D3D9 ', background: '', color: '#667085' , fontWeight: '500' , paddingBlock: '13px', fontSize: '14px'  }}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} style={{backgroundColor: 'white' , paddingBlock: '25px'}}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} style={{ borderBottom: 'solid 1px #D0D3D9' ,  paddingBlock: '24px' , paddingLeft: '40px'}}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="w-full flex justify-between p-4">
        <button className='bg-white flex gap-2 items-center border rounded-lg cursor-pointer text-slate-500 border-slate-300 px-2 py-1.5'
         onClick={() => previousPage()} disabled={!canPreviousPage}><FaArrowLeft /> Previous</button>
        <button className='bg-white flex gap-2 items-center border rounded-lg cursor-pointer text-slate-500 border-slate-300 px-2 py-1.5'
         onClick={() => nextPage()} disabled={!canNextPage}>Next <FaArrowRight /></button>
      </div>

      
      {/* <div>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30].map(pageSize => ( // Adjusted options to reflect multiples of 10
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div> */}
    </>
  );
};

export default ReusableTable;
