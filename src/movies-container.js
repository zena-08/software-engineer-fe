import styled from 'styled-components';

export const MoviesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
    /* max-width: 700px; */
    margin: 40px auto 80px;
    padding: 0 36px;
    position: relative;
    justify-content: space-around;
`;