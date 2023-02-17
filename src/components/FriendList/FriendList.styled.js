import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;;
    width: 300px;
    margin: auto;
    margin-bottom: 100px;
    padding: 0;
    `;

export const ListItem = styled.li`
    display: flex;
    width: 250px;
    align-items: center;
    margin: 0px auto;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 30%), 0px 1px 1px rgb(0 0 0 / 30%), 0px 2px 1px rgb(0 0 0 / 30%)
`;

export const Status = styled.span`
    margin-right: 15px;
    color: ${({isOnline}) => {
    return isOnline === true ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
    width: 60px;
    height: 60px;
    padding: 7px;
    margin-right: 20px;
    background-color: rgb(236, 219, 219);
    border-radius: 8px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 30%), 0px 1px 1px rgb(0 0 0 / 30%), 0px 2px 1px rgb(0 0 0 / 30%)
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
    font-weight: 700;
`;