import styled from "@emotion/styled";

export const Container = styled.div`
    background-color: #fff;
    width: 280px;
    margin: 30px auto;
    margin-bottom: 100px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 30%), 0px 1px 1px rgb(0 0 0 / 30%), 0px 2px 1px rgb(0 0 0 / 30%);
`;

export const Description = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 40px 0;
    `;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    padding: 5px;
    border-radius: 50%;
    border: 2px solid #797979;
    `;

export const Name = styled.h2`
    margin: 0;
`;

export const Tag = styled.p`
    margin: 0;
    color: #77797d;
`;

export const Location = styled.p`
    margin: 0;
    color: #77797d;
`;

export const Stats = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 70px;
    border-top: 1px solid #ccc;
    background-color: rgba(219,238,239,255);
    margin: 0;
    padding: 0;
`;

export const StatsItem = styled.li`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #ccc;
`;

export const Label = styled.span`
    margin: 0;
    color: #77797d;
`;

export const Quantity = styled.span`
    margin: 0;
    font-weight: 700;
`;