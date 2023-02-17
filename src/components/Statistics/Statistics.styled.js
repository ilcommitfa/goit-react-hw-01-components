import styled from "@emotion/styled";

export const Container = styled.section`
    width: 300px;
    margin: 0px auto;
    margin-bottom: 100px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 30%), 0px 1px 1px rgb(0 0 0 / 30%), 0px 2px 1px rgb(0 0 0 / 30%);
    background-color: #fff;
    color: #fff;
`;

export const Title = styled.h2`
    font-size: 22px;
    padding-top: 30px;
    padding-bottom: 30px;
    text-transform: uppercase;
    text-align: center;
    color: #000;
    margin: 0;
`;

export const List = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: calc(100% / 5);
    padding: 10px;
`;

export const Label = styled.span`
    margin-bottom: 5px;
`;