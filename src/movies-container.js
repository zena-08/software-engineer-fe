import styled from 'styled-components';

export const MoviesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
    padding: 0 36px;
    position: relative;
    justify-content: space-around;
    word-break: break-word;
    .movie-title {
        font-size: 1.5em;
        margin: 12px 0;
        cursor: pointer;
        :hover {
            color: #2188e2;
        }
    }
`;