import styled from "styled-components";

export const Container = styled.div`
    grid-area: MH;
    /* color: ${props => props.theme.colors.white}; */
    background-color: ${props => props.theme.colors.secondary};
    display: flex; //para ficar um na frente do outro
    justify-content: space-between; //para cada um ficar de um lado, esquer e direito
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.gray};



`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
