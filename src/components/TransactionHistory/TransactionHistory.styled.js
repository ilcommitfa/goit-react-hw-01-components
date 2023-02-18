import styled from "@emotion/styled";

export const Container = styled.table`
    background-color: #fff;
    width: 600px;
    font-size: 16px;
    margin: 0px auto;
    padding: 10px;
    border-radius: 10px;
    text-transform: uppercase;
    text-align: center;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 30%), 0px 1px 1px rgb(0 0 0 / 30%), 0px 2px 1px rgb(0 0 0 / 30%)
  `;

export const TableHead = styled.th`
    background-color: rgba(219,238,239,255);
    border: 1px solid #000;
    padding: 5px 0;
  `;

  export const TableRow = styled.tr`
    &:nth-child(even) {
      background-color: #f0f0f0;
    }  `;

  export const TableData = styled.td`
    border: 1px solid #000;
    padding: 5px 0;
    `;