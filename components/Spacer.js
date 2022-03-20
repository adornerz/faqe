import styled from 'styled-components'

export const Spacer = styled.div`
    aspect-ratio: 960/300;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${props => "/assets/images/" + props.image});
    overflow: visible;
`